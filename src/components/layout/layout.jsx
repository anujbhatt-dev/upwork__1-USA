 import React, {Component} from "react"
import Landing from "./landing/landing"
import Header from "./header/header"
import NavigationDots from "./navigation-dots/navigation-dots"
import  Map from "./map/map"
import Admin from "./admin/admin"
import List from "./admin/list/list"
import {Switch,Route} from "react-router-dom"
import Verified from "./verified/verified"



document.addEventListener('popstate', function (event) {
  this.alert("changed")}
  );

 class Layout extends Component{

    state={
      adminVerified:false
    }

    verificationHandler=()=>{
      this.setState({
        adminVerified:true
      })
    }

   render(){

     return (
        <div className="Layout">
           <Switch>
              <Route exact path="/">
                  <Header />
                  <Landing />
                  <NavigationDots/>
              </Route>
              <Route exact  path="/map">
                  <Header />
                  <Map/>
              </Route>
              <Route exact  path="/admin">
                  <Header />
                  <Admin verify={this.verificationHandler}/>
              </Route>
              <Route exact  path="/admin/list">
                  <List adminVerified={this.state.adminVerified} />
              </Route>
              <Route exact  path="/verified/:email/:firstName/:lastName/:date/:location/:country/:category">
                 <Verified/>
              </Route>

           </Switch>
        </div>
     )
   }
 }


export default Layout;
