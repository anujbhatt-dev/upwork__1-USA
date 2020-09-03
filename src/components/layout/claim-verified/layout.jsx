import React, {Component} from "react"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import Blogs from "./blogs/blogs"
import Post from "./blogs/post/post"
import AboutUs from "./about-us/about-us"
import ContactUs from "./contact-us/contact-us"
import Navigation from "./navigation/navigation"
import CallUsBar from "./call-us-bar/call-us-bar"
import {Switch,Route} from "react-router-dom"
import Footer from "./footer/footer"
import Fixed from "./fixed/fixed"

// Admin
import AdminLanding from "./admin/landing/landing"
import AdminPricing from "./admin/pricing/pricing"
import AdminBlogs from "./admin/blogs/blogs"
import AdminPost from "./admin/blogs/post/post"
import AdminAboutUs from "./admin/about-us/about-us"
import AdminContactUs from "./admin/contact-us/contact-us"
import AdminNavigation from "./admin/navigation/navigation"
import AdminCallUsBar from "./admin/call-us-bar/call-us-bar"
import AdminFooter from "./admin/footer/footer"
import AdminFixed from "./admin/fixed/fixed"
import AdminStudentList from "./admin/student-list/student-list"
import axios from "axios"



 class Layout extends Component{


    state={
        content:{},
    }


    componentDidMount(){

       
        axios.get("/v1/content").then(res=>{
            console.log(res);
            this.setState({content:res.data});
        })
        window.scrollTo({top:0,behavior:"smooth"})


    }



   render(){


     return (
        <div className="layout">

        <Switch>
            <Route path="/admin">
               <AdminCallUsBar styles={this.props.styles}/>
            </Route>
            <Route path="/">
               <CallUsBar styles={this.props.styles}/>
            </Route>
        </Switch>
           <hr className="hr"/>
           <Switch>
               <Route path="/admin">
                  <AdminFixed styles={this.props.styles}/>
               </Route>
               <Route path="/">
                  <Fixed styles={this.props.styles}/>
               </Route>
           </Switch>
           <div className="main">
             <Switch>
                 <Route path="/admin">
                    <AdminNavigation styles={this.props.styles}/>
                 </Route>
                 <Route path="/">
                    <Navigation styles={this.props.styles}/>
                 </Route>
             </Switch>
             <Switch>
                <Route exact path="/">
                    <Landing content={this.state.content} styleHandler={this.props.styleHandler}  styles={this.props.styles}/>
                </Route>
                <Route exact path="/pricing">
                    <Pricing content={this.state.content}  styles={this.props.styles}/>
                </Route>
                <Route exact path="/contactUs">
                    <ContactUs content={this.state.content} styles={this.props.styles}/>
                </Route>
                <Route exact path="/aboutUs">
                    <AboutUs content={this.state.content}  styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/blogs">
                     <Blogs content={this.state.content}  styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/blogs:id">
                     <Post content={this.state.content} styles={this.props.styles}/>
                 </Route>

                 <Route exact path="/admin">
                     <AdminLanding content={this.state.content} styleHandler={this.props.styleHandler}  styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/admin/pricing">
                     <AdminPricing content={this.state.content}  styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/admin/contactUs">
                     <AdminContactUs content={this.state.content} styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/admin/aboutUs">
                     <AdminAboutUs content={this.state.content}  styles={this.props.styles}/>
                  </Route>
                  <Route exact path="/admin/blogs">
                      <AdminBlogs content={this.state.content}  styles={this.props.styles}/>
                  </Route>
                  <Route exact path="/admin/blogs:id">
                      <AdminPost content={this.state.content} styles={this.props.styles}/>
                  </Route>
                  <Route exact path="/admin/studentList">
                      <AdminStudentList content={this.state.content} styles={this.props.styles}/>
                  </Route>
             </Switch>
           </div>
           <Switch>
               <Route path="/admin">
                  <AdminFooter styles={this.props.styles}/>
               </Route>
               <Route path="/">
                  <Footer styles={this.props.styles}/>
               </Route>
           </Switch>
        </div>
     )
   }
 }


export default Layout;
