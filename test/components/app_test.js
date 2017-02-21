import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/*global describe b:true*/
/*global it b:true*/
/*global beforeEach b:true*/
/*eslint no-undef: "error"*/

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
