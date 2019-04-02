//create the canvas object
var canavas = {};
//initialize all storage
canavas.storeTarget = null;
canavas.storeContext = null;
canavas.width = 0;
canavas.height = 0;
canavas.id = 0;
//find the target canvas
canavas.target = function(id,context){
	this.storeTarget = document.getElementById(id);
	this.storeContext = this.storeTarget.getContext(context);
	this.width = this.storeTarget.width;
	this.height = this.storeTarget.height;
}
//objects storage
//create the thread
canavas.thread = [];
//store the object coords through array
canavas.coords = [];
//functions
canavas.fill = function(color){
	this.thread.push({
		type : "color",
		value : color
	});
}
//objects
canavas.rectangle = function(x,y,width,height){
	this.thread.push({
		type : "object",
		value : {
			"type" : "rectangle",
			"x" : x,
			"y" : y,
			"width" : width,
			"height" : height
		}
	});
	this.coords.push({
		"id" : this.id,
		"x" : x,
		"y" : y,
		"width" : width,
		"height" : height
	});
	this.id++;
}

canavas.circle = function(argument) {
	// body...
}
//run
canavas.run = function() {
	var thread = this.thread;
	for(var i = 0; i < thread.length; i++){
		if(thread[i].type == "color"){
			this.storeContext.fillStyle = thread[i].value;
		}else if(thread[i].type == "object"){
			switch(thread[i].value.type){
				case "rectangle" : {
					this.storeContext.fillRect(thread[i].value.x, thread[i].value.y, thread[i].value.width, thread[i].value.height);
					break;
				}
			}
		}
	}
}