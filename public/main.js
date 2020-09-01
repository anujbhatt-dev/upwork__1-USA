simplemaps_worldmap.hooks.click_state = function(id){
window.location.hash="#"+ simplemaps_worldmap_mapdata.state_specific[id].name+"#"+id;
}

simplemaps_worldmap.hooks.over_state = function(id){
 window.location.hash="##"+ simplemaps_worldmap_mapdata.state_specific[id].name+"#"+id;
}

const xhr = new XMLHttpRequest();
xhr.open("GET","http://localhost:8081/api/v1/client/country/count");
xhr.onload=()=>{
  let dataArray = JSON.parse(xhr.response);
  let countries = [];
  let newData = {}
  dataArray.forEach(data=>{
       if(!countries.includes(data[3])){
          countries.push(data[3])
          newData[data[3]]=[0,0,0];
        }
  });
  dataArray.forEach(data=>{
       if(data[2]==="yes"){
           newData[data[3]][0]=data[0]
       }else if(data[2]==="no"){
          newData[data[3]][1]=data[0]
       }else if(data[2]==="undecided"){
          newData[data[3]][2]=data[0]
       }
  });
  Object.keys(newData).forEach(data=>{
       let percentage = Math.round(newData[data][0]/(newData[data][0]+newData[data][1]))*100;
        let color = null;
        if(percentage>=80){
          color =  "#F8171C";
        }else if(percentage>=60){
          color =  "#FA454A";
        }else if(percentage>=40) {
          color =  "#8C7A7A";
        }else if(percentage>=20) {
          color =  "#6EB9F8";
        }else{
          color =  "#3D9BE9";
        }
        simplemaps_worldmap_mapdata.state_specific[data].color= color
        simplemaps_worldmap_mapdata.state_specific[data].description= `<div>Believers: <strong>${newData[data][0]}</strong></div> <div>Non Believers: <strong>${newData[data][1]}</strong></div> <div>undecided: <strong>${newData[data][2]}</strong></div>`;
  })
   simplemaps_worldmap.load()
}
xhr.send();
