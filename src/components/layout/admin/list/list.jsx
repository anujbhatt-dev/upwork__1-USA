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
      chars:[],
      modifiedData:[],
      deletedSet:new Set(),
   }

   static contextType=LayoutContext;

   currentIndex=null;
   currentChar=null;
   currentCountry=null;

   componentDidMount=()=>{

      axios.get("/v1/admin/data").then(res=>{
                  
         this.setState({actualData:res.data,data:res.data});

        // console.log()
         let chars={};
         let ch={};
        // let country={};
           
        for (let data of res.data){
           if(data.country.charAt(0) in chars){
                
            if(data.country in chars[data.country.charAt(0)]){
               let temp=chars[data.country.charAt(0)];
               
                  temp[data.country][data.category].push(data);
                  temp[data.country]["all"].push(data);
         
            }else{
               ch[data.country.charAt(0)].push([data.country,data.code]);
               let temp=chars[data.country.charAt(0)];
               temp[data.country]={"yes":[],"no":[],"undecided":[],"all":[]};
               chars[data.country.charAt(0)][data.country][data.category].push(data);
               chars[data.country.charAt(0)][data.country]["all"].push(data)

            }
          
           }else{
              ch[data.country.charAt(0)]=[[data.country,data.code]];
            chars[data.country.charAt(0)]={
               [data.country]:{"yes":[],"no":[],"undecided":[],"all":[]}
            }
            chars[data.country.charAt(0)][data.country][data.category].push(data)
            chars[data.country.charAt(0)][data.country]["all"].push(data)
           }
        }
         console.log(chars);
         console.log(ch);


         this.setState({modifiedData:chars,chars:ch});
         
      })
      .catch(err=>{alert("error")})

      }


      selectHandler=(val)=>{
           // alert(charIndex+"- "+countryIndex)
        if(val===-1){
         //  let data=[... this.state.actualData]
         
         this.setState((state)=>{return {data:state.actualData}});
         return ;
        }

      console.log(val);

        let data=[... this.state.modifiedData[val.charAt(0)][val].["all"]];
      //   data=data.concat(this.state.modifiedData[val.charAt(0)][val].no);
      //   data=data.concat(this.state.modifiedData[val.charAt(0)][val].undecided);

        this.setState({data:data});

      }



   deleteHandler=(email)=>{
         
axios.delete("/v1/admin/client",{params:{email:email}}).
then((res)=>{ let deleted=new Set(this.state.deletedSet);
      deleted.add(email);
      console.log(deleted)
      this.setState({deletedSet:deleted})}).
catch(err=>alert("an alert occured try again"))      ;
      }

      filterHandler=(category,country)=>{
         let data=[... this.state.modifiedData[country.charAt(0)][country][category]];

         if(data.length===0)
          alert("no data");
          else
         this.setState({data:data});

      }
  


//   selectHandler=(charIndex,countryIndex)=>{



//   }



//  deleteHandler=(chari, countryi,category,clienti)=>{

// >>>>>>> 9ea82a55fbab80a95c23ea47ccbaeba6eb0ecf93

//    }


   render(){
     let perCountry = null
     if(this.state.data){

       perCountry =   <>
       <AdminHeader  selectHandler={this.selectHandler}  data={this.state.chars}/>
       {this.state.data.length<=0 || this.state.data.length===this.state.actualData.length?null:
         <div>
           <h2 onClick={()=>this.filterHandler("all",this.state.data[0].country)}>All</h2>
             <h2 onClick={()=>this.filterHandler("yes",this.state.data[0].country)}>BEL</h2>            
          <h2 onClick={()=>this.filterHandler("no",this.state.data[0].country)}>NONBEl</h2>
          <h2 onClick={()=>this.filterHandler("undecided",this.state.data[0].country)}>UnDE</h2>
           </div>
       }
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
              {this.state.data.map((client,i)=>{
                 if( this.state.deletedSet.has(client.email))
                 return null;
                return (<tbody className="list__body">
                     <tr className="list__body-row">
              <td className="list__body-row-column">{client.firstName+" "}{client.lastName}</td>
                         <td className="list__body-row-column">{client.createdOn}</td>
                         <td className="list__body-row-column">{client.email}</td>
                         <td className="list__body-row-column">{client.city}</td>
                         <td className="list__body-row-column">{client.country}</td>
                         <td className="list__body-row-column">{client.category}</td>
                         <td className="list__body-row-column list__body-row-column--delete"><i onClick={()=>this.deleteHandler(client.email)} class="fa fa-trash" aria-hidden="true"></i></td>
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
