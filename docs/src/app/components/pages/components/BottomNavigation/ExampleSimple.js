import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">location_on</FontIcon>;

const BottomNavigationExampleSimple = () => (
  <BottomNavigation initialSeletedIndex={0}>
    <BottomNavigationItem label='Recents' icon={recentsIcon}></BottomNavigationItem>
    <BottomNavigationItem label='Favorites' icon={favoritesIcon}></BottomNavigationItem>
    <BottomNavigationItem label='Nearby' icon={nearbyIcon}></BottomNavigationItem>
  </BottomNavigation>
);

export default BottomNavigationExampleSimple;
