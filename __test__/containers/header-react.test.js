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

  //this is a comments

  beforeEach(() => {
    initialState = {
			authenticated: false
		};
    //testComponent = shallow(<Header {...initialState} />);
  });

  it('should show Sign In/Sign Up When Not authenticated ', () => {
    //setup (optional)

    //execution
    testComponent = shallow(<Header {...initialState} />);
    
    const navBar = testComponent.find('.nav-link');
    expect(navBar).toHaveLength(2);
    expect(navBar.contains('Sign In')).toEqual(true);
    expect(navBar.contains('Sign Up')).toEqual(true);
  });

  it('should preserve snapshot', () => {
    //execution
     const tree = renderer.create(
        <Header {...initialState} />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
