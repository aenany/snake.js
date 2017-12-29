function Renderer() {
	this.canvas = document.getElementById("snakeCanvas");

	this.screenWidth = null;
	this.screenHeight = null;

	this.setCanvasSize(window.innerWidth - 20, window.innerHeight - 20);

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

Renderer.prototype.setCanvasSize = function (width, height) {
	var currentRenderer = this;

	this.screenWidth = width;
	this.screenHeight = height;

	this.canvas.setAttribute('width', this.screenWidth);
	this.canvas.setAttribute('height', this.screenHeight);

};

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


Renderer.prototype.drawText = function (text, color, xCoord, yCoord, store) {
	var currentRenderer = this;
	var elementUuid = 'text_' + generateUUIDv4();

	this.ctx.fillStyle = color;

	this.ctx.fillText(text, xCoord, yCoord);

	if (store) {

		var dimensions = {
			width: parseFloat(this.ctx.measureText(text).width),
			height: this.fontHeight,
			xCoord: xCoord,
			yCoord: yCoord
		};

		this.canvasElements[elementUuid] = dimensions;

	}

	return elementUuid;

};

Renderer.prototype.drawImage = function (imagePath, xCoord, yCoord, dWidth, dHeight, store) {
	var currentRenderer = this;

	var elementUuid = 'image_ ' + generateUUIDv4();

	var imageElement = document.createElement('img');
	imageElement.setAttribute('id', elementUuid);
	imageElement.setAttribute('src', imagePath);

	this.canvas.appendChild(imageElement);

	var image = document.getElementById(elementUuid);

	this.ctx.drawImage(image, xCoord, yCoord, dWidth, dHeight);

	if (store) {
		var dimensions = {
			width: dWidth,
			height: dHeight,
			xCoord: xCoord,
			yCoord: yCoord
		};

		this.canvasElements[elementUuid] = dimensions;

		return elementUuid;
	}
};

Renderer.prototype.drawRectangle = function (color, xCoord, yCoord, width, height, store) {
	var currentRenderer = this;
	var elementUuid = generateUUIDv4();

	this.ctx.fillStyle = color;

	this.ctx.fillRect(xCoord, yCoord, width, height);

	if (store) {
		var dimensions = {
			width: width,
			height: height,
			xCoord: xCoord,
			yCoord: yCoord
		};


		this.canvasElements[elementUuid] = dimensions;
	}

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