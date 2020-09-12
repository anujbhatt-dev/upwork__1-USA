 import React, {Component} from "react"
import Landing from "./landing/landing"
import Header from "./header/header"
import Footer from "./footer/footer"
import NavigationDots from "./navigation-dots/navigation-dots"
import  Map from "./map/map"
import Admin from "./admin/admin"
import List from "./admin/list/list"
import {Switch,Route} from "react-router-dom"
import Verified from "./verified/verified"
import EmailCheck from "./email-check/email-check"
import LayoutContext from "../layoutcontext"
import axios from "axios"
import PublicFigure from "./public-figure/public-figure"
import Claims from "./admin/claims/claims"
import PublicFigureDetail from "./public-figure/public-figure-details/public-figure-detail"
import ClaimVerified from "./claim-verified/claim-verified"
import { ThemeProvider } from "react-bootstrap"



document.addEventListener('popstate', function (event) {
  this.alert("changed")}
  );

 class Layout extends Component{

    state={
      authenticated:false,
      dots:false
    }

    dotsHandler=()=>{
      if(!this.state.dots){
        this.setState({
          dots:true
        })
      }
    }

    componentDidMount=()=>{
      axios.interceptors.response.use(response =>{
        let authorization=response.headers.authorization;
        if(authorization){
        axios.defaults.headers.common['authorization'] = authorization;
      this.setState({authenticated:true});
         }
         return response;
      } )
    }


   render(){

     return (

      <LayoutContext.Provider value={{authenticated:this.state.authenticated}}>
        <div className="Layout">
           <Switch>
              <Route exact path="/">
                  <Header />
                  <Landing dots={this.state.dots}/>
                  <NavigationDots  clicked={this.dotsHandler}/>
                  <Footer/>
              </Route>
              <Route exact  path="/map">
                  <Header />
                  <Map/>
                  <Footer/>
              </Route>
              <Route exact  path="/admin">
                  <Header />
                  <Admin authenticated={this.props.authenticated} />
                  <Footer/>
              </Route>
              <Route exact  path="/admin/list">
                  <List authenticated={this.props.authenticated} adminVerified={this.state.adminVerified} />
              </Route>
              <Route exact  path="/verified/:email/:firstName/:lastName/:date/:city/:country/:category/:publicFigure/:knowMore/:code">
                 <Verified/>
              </Route>
              <Route exact  path="/checkEmail">
                 <EmailCheck />
              </Route>
              <Route exact  path="/publicFigure">
                 <PublicFigure />
              </Route>
              <Route exact  path="/admin/claims">
                 <Claims authenticated={this.props.authenticated} />
              </Route>
              <Route exact  path="/publicFigure/:id">
                 <PublicFigureDetail authenticated={this.props.authenticated} />
              </Route>
              <Route exact  path="/claimVerified/:emailUsed/:email/:phone">
                 <ClaimVerified  />
              </Route>
           </Switch>

        </div>
        </LayoutContext.Provider>
     )
   }
 }


export default Layout;
