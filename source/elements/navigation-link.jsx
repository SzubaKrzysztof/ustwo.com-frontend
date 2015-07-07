'use strict';

import React from 'react';

import Router from '../flux/router';

export default class NavigationLink extends React.Component {
  render() {
    const classes = `nav__menu__item__link u-bar-after--${this.props.colour}`;
    return (
      <li className="nav__menu__item">
        <a href={this.props.url} className={classes} onClick={Router.override(this.props.url)}>{this.props.children}</a>
      </li>
    );
  }
};