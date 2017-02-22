import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Header } from '../../src/components/header';

/*global describe b:true*/
/*global it b:true*/
/*global beforeEach b:true*/
/*eslint no-undef: "error"*/

describe('Header Component Test', () => {
  let testComponent;
  let initialState;

  beforeEach(() => {
    initialState = {
			authenticated: false
		};
    testComponent = shallow(<Header {...initialState} />);
  });

  it('Header shows Welcome message ', () => {
    //setup (optional)

    //execution
    testComponent = shallow(<Header {...initialState} />);
    //check/verify/assert/expect
    console.log(testComponent.html());
    expect(testComponent.html().includes('<a class="navbar-brand">Welcome to Group Chat</a>'))
          .to.equal(true);
  });
});
