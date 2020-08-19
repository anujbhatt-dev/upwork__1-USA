 import React, {Component} from "react"
import Landing from "./landing/landing"
import Header from "./header/header"
import NavigationDots from "./navigation-dots/navigation-dots"
import  Map from "./map/map"
import Admin from "./admin/admin"
import BelieverList from "./admin/believer-list/believer-list"
import NotABelieverList from "./admin/not-a-believer-list/not-a-believer-list"
import {Switch,Route} from "react-router-dom"

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
           <Header />
           <Switch>
              <Route exact path="/">
                  <Landing />
                  <NavigationDots/>
              </Route>
              <Route exact  path="/map">
                  <Map/>
              </Route>
              <Route exact  path="/admin">
                  <Admin verify={this.verificationHandler}/>
              </Route>
              <Route exact  path="/admin/believer">
                  <BelieverList adminVerified={this.state.adminVerified} />
              </Route>
              <Route exact  path="/admin/notABeliever">
                  <NotABelieverList adminVerified={this.state.adminVerified} />
              </Route>

           </Switch>
        </div>
     )
   }
 }


export default Layout;
