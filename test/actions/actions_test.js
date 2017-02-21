import FirebaseServer from 'firebase-server';
import firebase from 'firebase';
import sinon from 'sinon';
import { MockFirebase } from 'firebase-mock';
import { assert, expect } from 'chai';
import * as actions from '../../src/actions';
import { AUTH_USER } from '../../src/actions/types';

/*global describe b:true*/
/*global it b:true*/
/*global before b:true*/
/*global after b:true*/
/*global beforeEach b:true*/
/*eslint no-undef: "error"*/

describe('Firebase actions', () => {
  let FbServer;

  before(() => {
    FbServer = new FirebaseServer(5000, 'localhost.firebaseio.test', {
      states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
      }
    });
    console.log(MockFirebase.MockFirebase);
    MockFirebase.override();
    // const config = {
    //  apiKey: 'fake-api-key-for-testing-purposes-only',
    //  databaseURL: 'ws://localhost.firebaseio.test:5000'
    // };
    // firebase.initializeApp(config, 'TestingEnvironment');
  });

  after(() => {
		if (FbServer) {
			FbServer.close();
			FbServer = null;
		}
    if (firebase) {
      firebase.database().goOffline();
    }
	});

  it('Loads firebase server', () => {
    assert(FbServer !== null);
    assert(firebase !== null);
  });
  //testing pattern for redux thunk
  it('Signs up User to FireBase', () => {
     const fn = actions.signupUser({ email: 't@t.com', password: 'secret' });

     assert(fn !== null);
     expect(fn).to.be.a('function');
     const dispatch = sinon.spy();
     fn(dispatch);
     sinon.assert.calledWith(dispatch, { type: AUTH_USER });
  });
});
