import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Logo } from '../../src';

const attatchTo = document.getElementById('root');

describe('Invalid Logo', ()=> {
  it('should complain if Logo is not found', ()=> {
    expect(() => mount(<Logo>{ () => <div /> }</Logo>, { attachTo })).to.throw(TypeError);

  })
});