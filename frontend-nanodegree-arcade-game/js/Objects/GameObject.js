/**
* @description Represents a GameObject that will be drawn on the path => Gems, Rock, etc
* @constructor
*/

var GameObject = function(_objType){
      // coordinates to be added to handle the user inputs
    this.hideOffsets = {
        'topX' : -101,
        'topY' : -83,
    };
    // Default to Blue Gem
    this.objType = _objType || 'blueGem';
    var _spriteDict = {
      'blueGem' : 'images/Gem Blue.png',
      'greenGem' : 'images/Gem Green.png',
      'orangeGem' : 'images/Gem Orange.png',
      'rock': 'images/Rock.png'
    };
    this.sprite = _spriteDict[this.objType];
      // Initial variables to hold the size and step of the game object positions
    var _xOffset = 0;
    var _yOffset = 60;
    var _rowHeight = 83; // rowHeight of the blocks where the game objects can be placed
    var _rowWidth = 101; // rowHeight of the blocks where the game objects can be placed

    // Random initialization of the x and y value to be placed anywhere on the three block paths
    this.rowNum = (Math.floor(5 * Math.random(Date.now())));
    this.colNum = (Math.floor(3 * Math.random(Date.now())));
    this.x = _xOffset + ( _rowWidth * this.rowNum);
    this.y = _yOffset + ( _rowHeight * this.colNum);
}

// Draw the game object on the screen, required method for game
GameObject.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Remove the game obj from the screen, required method for game
GameObject.prototype.remove = function() {
  this.x = this.hideOffsets.topX;
  this.y = this.hideOffsets.topY;
};
