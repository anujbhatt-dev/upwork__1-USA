simplemaps_worldmap.hooks.click_state = function(id){
window.location.hash="#"+ simplemaps_worldmap_mapdata.state_specific[id].name+"#"+id;
}

simplemaps_worldmap.hooks.over_state = function(id){
 window.location.hash="##"+ simplemaps_worldmap_mapdata.state_specific[id].name+"#"+id;
}

const xhr = new XMLHttpRequest();
xhr.open("GET","http://godsplan-env.eba-ppuxuhbi.ap-south-1.elasticbeanstalk.com/api/v1/client/country/count");
xhr.onload=()=>{
  let dataArray = JSON.parse(xhr.response);
  let countries = [];
  let newData = {}
  dataArray.forEach(data=>{
       if(!countries.includes(data[3])){
          countries.push(data[3])
          newData[data[3]]=[0,0];
        }
  });
  dataArray.forEach(data=>{
       if(data[2]==="yes"){
           newData[data[3]][0]=data[0]
       }else{
          newData[data[3]][1]=data[0]
       }
  });
  Object.keys(newData).forEach(data=>{
       let percentage = Math.round(newData[data][0]/(newData[data][0]+newData[data][1]))*100;
        let color = null;
        if(percentage>=80){
          color =  "#c80079";
        }else if(percentage>=60){
          color =  "#fb0098";
        }else if(percentage>=40) {
          color =  "#ff2fad";
        }else if(percentage>=20) {
          color =  "#ff62c1";
        }else{
          color =  "#ff95d5";
        }
        simplemaps_worldmap_mapdata.state_specific[data].color= color
  })
   simplemaps_worldmap.load()
}
xhr.send();
