import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Chceckout</NavigationItem>
    </ul>
  );
}

export default navigationItems;
