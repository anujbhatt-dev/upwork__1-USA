
simplemaps_worldmap.hooks.click_state = function(id){
// alert(simplemaps_worldmap_mapdata.state_specific[id].name);
window.location.hash="#"+ simplemaps_worldmap_mapdata.state_specific[id].name;
}
simplemaps_worldmap.hooks.over_state = function(id){
 // console.log(simplemaps_worldmap_mapdata.state_specific[id].name);
 // console.log(simplemaps_worldmap_mapdata.state_specific[id].name);
 window.location.hash="##"+ simplemaps_worldmap_mapdata.state_specific[id].name;

}
// simplemaps_worldmap.hooks.out_state = function(id){
//  // console.log(simplemaps_worldmap_mapdata.state_specific[id].name);
//  // console.log(simplemaps_worldmap_mapdata.state_specific[id].name);
//  window.location.hash="##"
//
// }
