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
       let percentage = Math.ceil((newData[data][0]*100)/(newData[data][0]+newData[data][1]));
        let color = null;
        console.log(data,percentage+"%",newData[data][0],newData[data][1]);
        if(percentage>=80){
          color =  "#3D9BE9";
        }else if(percentage>=60){
          color =  "#6EB9F8";
        }else if(percentage>=40) {
          color =  "#8C7A7A";
        }else if(percentage>=20) {
          color =  "#FA454A";
        }else{
          color =  "#F8171C";
        }
        simplemaps_worldmap_mapdata.state_specific[data].color= color
        simplemaps_worldmap_mapdata.state_specific[data].description= `<div style="font-size:1rem;">Believers: <strong style="font-size:1rem;">${newData[data][0]}</strong></div> <div style="font-size:1rem;">Non Believers: <strong style="font-size:1rem;">${newData[data][1]}</strong></div style="font-size:1rem;"> <div style="font-size:1rem;">undecided: <strong style="font-size:1rem;">${newData[data][2]}</strong></div>`;
  })
   simplemaps_worldmap.load()
}
xhr.send();
