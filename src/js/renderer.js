function Renderer() {
	this.canvas = document.getElementById("snakeCanvas");
	this.ctx = this.canvas.getContext("2d");

	this.fontHeight = 15;
	this.fontType = "Arial";

	this.ctx.font = this.fontHeight + "px " + this.fontType;

	this.canvasWidth = this.canvas.width;
	this.canvasHeight = this.canvas.height;

	this.canvasBackgroundColor = null;
	this.canvasInverseBackgroundColor = null;

	this.canvasElements = {};
}

Renderer.prototype.fillEntireCanvas = function (color) {
	this.canvasBackgroundColor = color;
	this.ctx.fillStyle = color;

	gameRenderer.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
};

Renderer.prototype.getBackgroundColor = function () {
	return this.canvasBackgroundColor;
};

Renderer.prototype.setBackgroundColor = function (color) {
	this.canvasBackgroundColor = color;
	this.canvasInverseBackgroundColor = invertColor(color);

	return this.canvasBackgroundColor;
};

Renderer.prototype.drawScore = function(score) {
	this.ctx.fillStyle = "gold";
	this.ctx.fillText('SCORE: ' + score, this.canvasWidth - (this.canvasWidth), this.canvasHeight - (this.canvasHeight - this.fontHeight));
};

Renderer.prototype.drawSnake = function(x, y, w, h) {
	gameRenderer.ctx.fillStyle = "lime";
	gameRenderer.ctx.fillRect(x, y, w, h);
};

Renderer.prototype.drawText = function (text, xCoord, yCoord) {
	var currentRenderer = this;

	this.ctx.fillText(text, xCoord, yCoord);

	var elementUuid = generateUUIDv4();

	var dimensions = {
		width: parseFloat(this.ctx.measureText(text).width),
		height: this.fontHeight,
		xCoord: xCoord,
		yCoord: yCoord
	};

	this.canvasElements[elementUuid] = dimensions;

	return elementUuid;

};

Renderer.prototype.drawRectangle = function (xCoord, yCoord, width, height) {
	var currentRenderer = this;

	this.ctx.fillRect(xCoord, yCoord, width, height);

	var dimensions = {
		width: width,
		height: height,
		xCoord: xCoord,
		yCoord: yCoord
	};

	var elementUuid = generateUUIDv4();

	this.canvasElements[elementUuid] = dimensions;

	return elementUuid;

};

Renderer.prototype.clearElement = function (elementUuid) {

	if (this.canvasElements[elementUuid]) {
		var currentElement = this.canvasElements[elementUuid];
		this.ctx.fillStyle = this.canvasBackgroundColor;

		this.ctx.fillRect(currentElement.xCoord, currentElement.yCoord, currentElement.width, currentElement.height);

		delete this.canvasElements[elementUuid];
	}

	return elementUuid;
};