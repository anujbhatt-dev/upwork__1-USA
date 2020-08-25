import React, {Component} from "react"
import AdminHeader from "../admin-header/admin-header"
import { toast } from 'react-toastify';
import Flag from "react-world-flags"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import LayoutContext from "../../../layoutcontext";

toast.configure()


 class List extends Component{

   state={
      data:[],
      actualData:[],
      modifiedData:[],
   }

   static contextType=LayoutContext;

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount=()=>{

      axios.get("/v1/admin/data").then(res=>{
          this.setState({
            data:res.data
          })
          console.log(res.data);
      })
  }


  selectHandler=(charIndex,countryIndex)=>{



  }



 deleteHandler=(chari, countryi,category,clienti)=>{


   }


   render(){
     let perCountry = null
     if(this.state.data){

       perCountry =   <>
       <AdminHeader  selectHandler={this.selectHandler}  data={this.state.modifiedData}/>
          <div className="list__heading">Do you believe in god ? </div>
          <table className="list">
              <thead className="list__head">
                   <tr className="list__head-row">
                       <td className="list__head-row-column">Name</td>
                       <td className="list__head-row-column">Added On</td>
                       <td className="list__head-row-column">Email</td>
                       <td className="list__head-row-column">City</td>
                       <td className="list__head-row-column">Country</td>
                       <td className="list__head-row-column">Status</td>
                       <td className="list__head-row-column list__head-row-coloumn--delete">delete</td>
                   </tr>
              </thead>
              {this.state.data.map(data=>{
                return (<tbody className="list__body">
                     <tr className="list__body-row">
                         <td className="list__body-row-column">Anuj Bhatt</td>
                         <td className="list__body-row-column">8-20-2020</td>
                         <td className="list__body-row-column">anujbhatt023@gmial.com</td>
                         <td className="list__body-row-column">Dehradun</td>
                         <td className="list__body-row-column">India</td>
                         <td className="list__body-row-column">believer</td>
                         <td className="list__body-row-column list__body-row-column--delete"><i class="fa fa-trash" aria-hidden="true"></i></td>
                     </tr>
                </tbody>)
              })}
          </table>
       </>
     }


    return (
       perCountry
         )
   }
 }


export default List;
