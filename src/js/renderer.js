function Renderer() {
	this.canvas = document.getElementById("snakeCanvas");
	this.ctx = this.canvas.getContext("2d");
	
	this.fontHeight = 15;
	this.fontType = "Arial";

	this.ctx.font = this.fontHeight + "px " + this.fontType;

	this.canvasWidth = this.canvas.width;
	this.canvasHeight = this.canvas.height;

	this.canvasBackgroundColor = null;

	this.canvasElements = {};
}

Renderer.prototype.fillEntireCanvas = function(color) {
	this.canvasBackgroundColor = color;
	this.ctx.fillStyle = color;

    gameRenderer.ctx.fillRect(0,0, this.canvasWidth, this.canvasHeight);
};

Renderer.prototype.getBackgroundColor = function () {
	return this.canvasBackgroundColor;
};

Renderer.prototype.setBackgroundColor = function (color) {
	this.canvasBackgroundColor = color;
	this.canvasInverseBackgroundColor = invertColor(color);

	return this.canvasBackgroundColor;
};

Renderer.prototype.drawText = function (text, xCoord, yCoord) {
	var currentRenderer = this;
	
	this.ctx.fillText(text, xCoord, yCoord);

	var elementUuid = generateUUIDv4();

	var dimensions = {
		width: this.ctx.measureText(text),
		height: this.fontHeight,
		xCoord: xCoord,
		yCoord: yCoord
	};

	this.canvasElements[elementUuid] = dimensions;

	return elementUuid;

};

Renderer.prototype.clearElement = function (elementUuid) {
	for(var element in this.canvasElements) {
		var currentElement = this.canvasElements[element];

		if(elementUuid === element){
			this.ctx.fillStyle = this.canvasBackgroundColor;
			this.ctx.fillRect(currentElement.xCoord, currentElement.yCoord, currentElement.width, currentElement.height);
			delete this.canvasElements[currentElement];
		}
		
	}
};