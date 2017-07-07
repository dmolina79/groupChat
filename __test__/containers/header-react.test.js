import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } from '../../src/containers/header';


/*global describe b:true*/
/*global it b:true*/
/*global beforeEach b:true*/
/*eslint no-undef: "error"*/

describe('Header Component Test', () => {
  let testComponent;
  let initialState;
  let authState;

  //this is a comments

  beforeEach(() => {
    initialState = {
			authenticated: false
		};
    authState = {
      authenticated: true
    };
  });

  it('should show Sign In/Sign Up When Not authenticated ', () => {
    //execution
    testComponent = shallow(<Header {...initialState} />);
    
    const navBar = testComponent.find('.nav-link');
    expect(navBar).toHaveLength(2);
    expect(navBar.contains('Sign In')).toEqual(true);
    expect(navBar.contains('Sign Up')).toEqual(true);
  });

  it('should show Application Links When User Authenticated ', () => {
    //execution
    testComponent = shallow(<Header {...authState} />);
    
    const navBar = testComponent.find('.nav-link');
    expect(navBar).toHaveLength(3);
    expect(navBar.contains('Create a GroupChat')).toEqual(true);
    expect(navBar.contains('Find a GroupChat')).toEqual(true);
    expect(navBar.contains('Sign Out')).toEqual(true);
  });

  it('when not authenticated it renders links correctly on snapshot', () => {
    //execution
     const tree = renderer.create(
        <Header {...initialState} />
      ).toJSON();

     expect(tree).toMatchSnapshot();
  });

   it('when authenticated it renders links correctly on snapshot', () => {
    //execution
     const tree = renderer.create(
        <Header {...authState} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
