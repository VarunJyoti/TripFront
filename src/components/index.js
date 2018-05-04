import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import App from "./App.js";
import MyTrips from "./MyTrips.js";
import ProfileScreen from "./ProfileScreen.js";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: App },
    MyTrips: { screen: MyTrips },
    Profile: { screen: ProfileScreen}  
   
  }
);
export default HomeScreenRouter;