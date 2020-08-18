 import React, {Component} from "react"
import Landing from "./landing/landing"
import Header from "./header/header"
import NavigationDots from "./navigation-dots/navigation-dots"
import  Map from "./map/map"
import {Switch,Route} from "react-router-dom"

document.addEventListener('popstate', function (event) {
  this.alert("changed")}
  );
  
 class Layout extends Component{


   render(){

     return (
        <div className="Layout">
           <Header />
           <Switch>
              <Route exact path="/">
                  <Landing />
                  <NavigationDots/>
                  <Map/>
              </Route>
              <Route exact  path="/map">
                  <Map/>
              </Route>
              <Route  path="/map" >
                  <Map/>
              </Route>
           </Switch>
        </div>
     )
   }
 }


export default Layout;
