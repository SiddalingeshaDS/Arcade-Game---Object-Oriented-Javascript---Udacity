/**
* @description Represents a GameObject that will be drawn on the path => Gems, Rock, etc
* @constructor
*/

var GameObject = function(_objType){
    if(!CONSTANTS){
      return;
    }
      // coordinates to be added to handle the user inputs
    this.hideOffsets = {
        'topX' : CONSTANTS.GAME_OBJECTS.HIDE_OFFSETS.TOP_X,
        'topY' : CONSTANTS.GAME_OBJECTS.HIDE_OFFSETS.TOP_Y,
    };
    // Default to Blue Gem
    this.objType = _objType || CONSTANTS.GAME_OBJECTS.DEFAULT_OBJ_TYPE;
  
    var _spriteDict = CONSTANTS.GAME_OBJECTS.SPRITE_DICT;
  
    this.sprite = _spriteDict[this.objType];
      // Initial variables to hold the size and step of the game object positions
    var _xOffset = CONSTANTS.GAME_OBJECTS.X_INITIAL_OFFSET;
    var _yOffset = CONSTANTS.GAME_OBJECTS.Y_INITIAL_OFFSET;
    var _rowHeight = CONSTANTS.GAME_OBJECTS.ROW_HEIGHT; // rowHeight of the blocks where the game objects can be placed
    var _colWidth = CONSTANTS.GAME_OBJECTS.COL_WIDTH; // rowWidth of the blocks where the game objects can be placed

    // Random initialization of the x and y value to be placed anywhere on the three block paths
    this.colNum = (Math.floor(CONSTANTS.GAME_OBJECTS.NUMBER_OF_COLS * Math.random(Date.now())));
    this.rowNum = (Math.floor(CONSTANTS.GAME_OBJECTS.NUMBER_OF_ROWS * Math.random(Date.now())));
    this.x = _xOffset + ( _colWidth * this.colNum);
    this.y = _yOffset + ( _rowHeight * this.rowNum);
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
