import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/*global describe b:true*/
/*global it b:true*/
/*global beforeEach b:true*/
/*eslint no-undef: "error"*/

describe('App Component Test', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Component renders something with Test Helper (Stephen)', () => {
    expect(component).to.exist;
  });
});
