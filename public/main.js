export let hover_country=null;

simplemaps_worldmap.hooks.click_state = function(id){
// alert(simplemaps_worldmap_mapdata.state_specific[id].name);
window.location.hash="#"+ simplemaps_worldmap_mapdata.state_specific[id].name;
}
simplemaps_worldmap.hooks.over_state = function(id){
 // console.log(simplemaps_worldmap_mapdata.state_specific[id].name);
 hover_country = simplemaps_worldmap_mapdata.state_specific[id].name
}
