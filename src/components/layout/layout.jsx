 import React, {Component} from "react"
import Landing from "./landing/landing"
import Header from "./header/header"
import NavigationDots from "./navigation-dots/navigation-dots"

 class Layout extends Component{


   render(){

     return (
        <div className="Layout">
           <NavigationDots />
           <Header />
           <Landing />
        </div>
     )
   }
 }


export default Layout;
