function initialize(){
	try{
		var canvas = document.getElementById("map-canvas");
		var context = canvas.getContext("2d");
    	var img =  new Image();
    	img.onload = function(){
    		context.drawImage(img,0,0,canvas.width,canvas.height);
    	}
    	img.src = "world.png";
    	
	} catch(error){
	}
}
