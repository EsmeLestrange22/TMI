canvas= new fabric.Canvas("myCanvas");
clary_x = 30;
clary_y = 30;

width_body_parts = 30;
height_body_parts = 30;

clary_o = "";
body_parts_o = "";

function player_update() {
fabric.Image.fromURL("cf.png", 
function(Img){
    clary_o = Img;
    clary_o.scaleToWidth(150);
    clary_o.scaleToHeight(140);
    clary_o.set({
        top:Player_y,
        left:Player_x
    });
    canvas.add(player_o);
}




)  ; 
}