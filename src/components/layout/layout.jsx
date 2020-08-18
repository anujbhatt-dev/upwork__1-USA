 import React, {Component} from "react"
import Landing from "./landing/landing"
import Header from "./header/header"
import NavigationDots from "./navigation-dots/navigation-dots"
import  Map from "./map/map"
import {Switch,Route} from "react-router-dom"

 class Layout extends Component{


   render(){

     return (
        <div className="Layout">
           <Header />
           <Switch>
              <Route exact path="/">
                  <Landing />
                  <NavigationDots/>
              </Route>
              <Route exact path="/map">
                  <Map/>
              </Route>
           </Switch>
        </div>
     )
   }
 }


export default Layout;
