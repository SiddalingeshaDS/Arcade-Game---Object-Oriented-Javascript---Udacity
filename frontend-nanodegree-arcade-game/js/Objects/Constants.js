/**
* @description Constants Object to hold the values
*/
var parameters;
CONSTANTS = (function(params){
  params = params || {};
  
  var _canvasColWidth = params.canvasWidth || 101;
  var _canvasRowHeight = params.canvasHeight || 83;
  
  var _numberOfRows = (params.numberOfRows || 6) > 6 ? params.numberOfRows : 6;
  var _numberOfCols = (params.numberOfCols || 5) > 5 ? params.numberOfCols : 5; 
  
  var _numberOfStonePaths = _numberOfRows - 3;
  var _centerRowNumber = Math.ceil(_numberOfStonePaths/2);
  var _centerColNumber = Math.ceil(_numberOfCols/2);
  
  var _imgLoadList = params.imgList || [
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/Gem Blue.png',
        'images/Gem Green.png',
        'images/Gem Orange.png',
        'images/Rock.png',
        'images/Selector.png',
        'images/Star.png',
        'images/Heart.png',
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png'
      ];
  
  
  // engine constants
  var _backgroundRowImages = [];
  _backgroundRowImages[0] = params.topImg || 'images/water-block.png';
  for(var i=1; i<= _numberOfStonePaths; i++){
    _backgroundRowImages[i] = params.pathImg || 'images/stone-block.png';
  }
  _backgroundRowImages[_numberOfRows - 2] = params.bottomImg || 'images/grass-block.png';
  _backgroundRowImages[_numberOfRows - 1] = params.bottomImg || 'images/grass-block.png';
  
  var _paddingBottom = params.paddingBottom || 108;
  
  var _canvasWidth = _numberOfCols * _canvasColWidth;
  var _canvasHeight = _numberOfRows * _canvasRowHeight + _paddingBottom;
  
  var _scoreCanvasHeight = params.scoreCanvasHeight || 100;
  
  // game constants
  var _game_initialPosX = _canvasColWidth * (_centerColNumber - 3);
  var _game_limitLeftX = _game_initialPosX;
  var _game_limitRightX = _canvasColWidth * (_centerColNumber + 1);
  var _game_players = params.gamePlayers || {
      'boy': 'images/char-boy.png',
      'cat-girl': 'images/char-cat-girl.png',
      'horn-girl': 'images/char-horn-girl.png',
      'pink-girl': 'images/char-pink-girl.png',
      'princess-girl': 'images/char-princess-girl.png'
    };
  var _game_playerTypes = [];
  var _game_bgImages = [];
  for(var _playerType in _game_players){
     if (_game_players.hasOwnProperty(_playerType)) {
       _game_playerTypes.push(_playerType);
       _game_bgImages.push(_game_players[_playerType]);
    }
  }
  
  var _game_imgCoordinatesOffsetY = -50;
  var _game_bgImgCoordinates = [];
  var _numberOfPlayerTypes = _game_playerTypes.length;
  
  for(var i=0; i<_numberOfPlayerTypes; i++){
    var _temp = _game_limitLeftX + i * _canvasColWidth;
    _game_bgImgCoordinates[i] = {'X': _temp, 'Y': (_centerRowNumber * _canvasRowHeight) + _game_imgCoordinatesOffsetY};
  }
  
  var _game_startOffsetX = 10;
  var _game_startX = ((_centerColNumber - 3) * _canvasColWidth) + _game_startOffsetX;
  
  var _game_startOffsetY = 81;
  var _game_startY = ((_centerRowNumber + 1) * _canvasRowHeight) + _game_startOffsetY;
  
  
  var _game_endOffsetX = -1;
  var _game_endX = ((_centerColNumber - 2) * _canvasColWidth) + _game_endOffsetX;
  
  var _game_endOffsetY = 114;
  var _game_endY = ((_centerRowNumber) * _canvasRowHeight) + _game_endOffsetY;
  
  var _game_spriteImgOffsetY = -36;
  var _game_spriteImgY = (_centerRowNumber * _canvasRowHeight) + _game_spriteImgOffsetY;
      
  // game objects constants
  var _go_defaultObjType = params.defaultObjType || 'blueGem';
  var _go_spriteDict = params.objSpriteDict || {
        'blueGem' : 'images/Gem Blue.png',
        'greenGem' : 'images/Gem Green.png',
        'orangeGem' : 'images/Gem Orange.png',
        'rock': 'images/Rock.png'
      };
  var _go_initialOffsetX = 0;
  var _go_initialOffsetY = 60;
  
  
  // enemy constants
  var _enemy_minSpeed = params.enemyMinSpeed || 100;
  var _enemy_speedVariation = params.enemySpeedVariation || 300;
  var _enemy_initalY = 60;
  var _enemy_spriteImg = params.enemySpriteImg || 'images/enemy-bug.png';
  
  // player constants
  var _p_initialOffsetX = -2;
  var _p_initialX = ((_centerColNumber - 1) * _canvasColWidth) + _p_initialOffsetX; //200
  var _p_initialOffsetY = -98;
  var _p_initialY = (_numberOfRows * _canvasRowHeight) + _p_initialOffsetY;

  var _p_limitRightX = (_numberOfCols - 1) * _canvasColWidth;
  var _p_limitTopY = 0;
  var _p_limitBottomY = (_numberOfRows * _canvasRowHeight) + _p_initialOffsetY;
  
  var _p_collisionRangeX = params.collisionRangeX || 80;
  var _p_collisionRangeY = params.collisionRangeY || 63;
  
  var _p_defaultPlayerType = params.defaultPlayerType || 'boy';
  var _p_defaultLevel = 0;
  var _p_defaultLives = 3;
  
  var _scoreTextOffsetY = 50;
  var _scoreCanvasY = 0;

  // player score constants
  var _p_score_canvasWidth = 0.24 * _canvasWidth;
  var _p_score_offsetX = 10;
  var _p_score_canvasX = 0;
  var _p_score_x = _p_score_canvasX + _p_score_offsetX;
  var _p_score_defaultVal = params.scoreVal || {
        'finish': 5,
        'star': 5,
        'blueGem': 10,
        'greenGem': 15,
        'orangeGem': 25,
        'collision': -5,
        'offBound': -1,
        'rock': 0
      };
  
  // player life constants
  var _p_life_canvasWidth = 0.36 * _canvasWidth;
  var _p_life_offsetX = 100;
  var _p_life_x = _p_score_canvasWidth + _p_life_offsetX;
  var _p_life_spriteX = _p_score_canvasWidth;
  var _p_life_spriteY = -45;
  var _p_life_spriteImg = params.lifeSpriteImg || 'images/Heart.png';
  
  // player level constants
  var _p_lev_canvasWidth = 0.4 * _canvasWidth;
  var _p_lev_offsetX = 100;
  var _p_lev_x = _p_score_canvasWidth + _p_life_canvasWidth + _p_lev_offsetX;
  var _p_lev_spriteX = _p_score_canvasWidth + _p_life_canvasWidth;
  var _p_lev_spriteY = -60;
  var _p_lev_spriteImg = params.levelSpriteImg || 'images/Star.png';
  
  
  return {
    // Engine Constants
    'ENGINE': {
      'CANVAS_MAIN': {
        'WIDTH': _canvasWidth,
        'HEIGHT': _canvasHeight
      },
      'CANVAS_SCORE': {
        'WIDTH': _canvasWidth,
        'HEIGHT': _scoreCanvasHeight
      },
      'BACKGROUND_ROW_IMAGES': _backgroundRowImages,
      'NUMBER_OF_ROWS': _numberOfRows,
      'NUMBER_OF_COLS': _numberOfCols,
      'ROW_HEIGHT': _canvasRowHeight,
      'COL_WIDTH': _canvasColWidth,
      'IMG_LOAD_LIST': _imgLoadList
    },
    // Game Constants
    'GAME': {
      'INITIAL_POSITIONS': {'X': _game_initialPosX},
      'INITIAL_PLAYER_NUM': 0,
      'OFFSETS': {        
        'LEFT': {'X': -(_canvasColWidth) },
        'RIGHT': {'X': _canvasColWidth }
      },
      'LIMITS': {
        'LEFT_X': _game_limitLeftX,
        'RIGHT_X': _game_limitRightX
      },
      'PLAYER_OFFSETS': {
        'LEFT': -1,
        'RIGHT': 1
      },
      'PLAYER_TYPES': _game_playerTypes,
      'GAME_START_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Select the player and Hit Enter to Start the Game.",
        'TEXT_X': _game_startX,
        'TEXT_Y': _game_startY
      },
      'GAME_END_RENDER_SETUP': {
        'FONT': "50px Arial",
        'TEXT': "GAME OVER!",
        'FILL_STYLE': 'red',
        'TEXT_X': _game_endX,
        'TEXT_Y': _game_endY
      },
      'INITIAL_PLAYER': null,
      'BACKGROUND_ROW_IMAGES': _game_bgImages,
      'BACKGROUND_IMG_COORDINATES': _game_bgImgCoordinates,
      'SPRITE_IMG': 'images/Selector.png',
      'SPRITE_IMG_Y': _game_spriteImgY,

    },
    // Game Objects constants
    'GAME_OBJECTS': {
      'HIDE_OFFSETS': {
        'TOP_X': -(_canvasColWidth),
        'TOP_Y': -(_canvasRowHeight)
      },
      'DEFAULT_OBJ_TYPE': _go_defaultObjType,
      'SPRITE_DICT': _go_spriteDict,
      'X_INITIAL_OFFSET': _go_initialOffsetX,
      'Y_INITIAL_OFFSET': _go_initialOffsetY,
      'ROW_HEIGHT': _canvasRowHeight,
      'COL_WIDTH': _canvasColWidth,
      'NUMBER_OF_ROWS': _numberOfStonePaths,
      'NUMBER_OF_COLS': _numberOfCols
    },
    // Enemy Constants
    'ENEMY': {
      'CANVAS_WIDTH': _canvasWidth,
      'MIN_SPEED': _enemy_minSpeed,
      'SPEED_VARIATION': _enemy_speedVariation,
      'X_INITIAL_OFFSET': -(_canvasColWidth),
      'Y_INITIAL_OFFSET': _enemy_initalY,
      'ROW_HEIGHT': _canvasRowHeight,
      'NUMBER_OF_PATHS': _numberOfStonePaths,
      'SPRITE_IMG': _enemy_spriteImg
    },
    // Player constants
    'PLAYER': {
      'INITIAL_POSITIONS': {'X': _p_initialX, 'Y': _p_initialY},
      'OFFSETS': {        
        'LEFT': {'X': -(_canvasColWidth), 'Y': 0},
        'UP': {'X': 0, 'Y': -(_canvasRowHeight)},
        'RIGHT': {'X': _canvasColWidth, 'Y': 0},
        'DOWN': {'X': 0, 'Y': _canvasRowHeight}
      },
      'LIMITS': {
        'LEFT_X': _p_initialOffsetX,
        'RIGHT_X': _p_limitRightX,
        'TOP_Y': _p_limitTopY,
        'BOTTOM_Y': _p_limitBottomY
      },
      'COLLISION_RANGE': {
        'X': _p_collisionRangeX,
        'Y': _p_collisionRangeY
      },
      'DEFAULT_PLAYER_TYPE': _p_defaultPlayerType,
      'SPRITE_DICT': _game_players,
      'DEFAULT_PREV_MOVE': '',
      'DEFAULT_LEVEL': _p_defaultLevel,
      'DEFAULT_LIVES': _p_defaultLives
    },
    // Player level constants
    'PLAYER_LEVEL': {
      'LEVEL_SETUP': [{
          'numberOfEnemies': 1,
          'numberOfBlueGems': 1,
          'numberOfGreenGems': 0,
          'numberOfOrangeGems': 0,
          'numberOfRocks': 0
        },
        {
          'numberOfEnemies': 2,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 0,
          'numberOfOrangeGems': 0,
          'numberOfRocks': 1
        },
        {
          'numberOfEnemies': 3,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 1,
          'numberOfOrangeGems': 0,
          'numberOfRocks': 1
        },
        {
          'numberOfEnemies': 3,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 1,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 1
        },
        {
          'numberOfEnemies': 3,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 2
        },
        {
          'numberOfEnemies': 5,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 2
        },
        {
          'numberOfEnemies': 5,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 3
        },
        {
          'numberOfEnemies': 5,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 4
        },
        {
          'numberOfEnemies': 6,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 5
        },
        {
          'numberOfEnemies': 8,
          'numberOfBlueGems': 3,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 6
        }],
      'INITIAL_LEVEL': _p_defaultLevel,
      'LEVEL_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Level: ",
        'CANVAS_WIDTH': _p_lev_canvasWidth,
        'CANVAS_HEIGHT': _scoreCanvasHeight,
        'TEXT_X': _p_lev_x,
        'TEXT_Y': _scoreTextOffsetY
      },
      'SPRITE_X': _p_lev_spriteX,
      'SPRITE_Y': _p_lev_spriteY,
      'SPRITE_IMG': _p_lev_spriteImg,
      'CANVAS_RECT_X': _p_lev_spriteX,
      'CANVAS_RECT_Y': _scoreCanvasY
    },
    // Player score constants
    'PLAYER_SCORE': {
      'INITIAL_SCORE': 0,
      'SCORE_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Score: ",
        'CANVAS_WIDTH': _p_score_canvasWidth,
        'CANVAS_HEIGHT': _scoreCanvasHeight,
        'TEXT_X': _p_score_x,
        'TEXT_Y': _scoreTextOffsetY
      },
      'DEFAULT_SCORE_VALUES': _p_score_defaultVal,
      CANVAS_RECT_X: _p_score_canvasX,
      CANVAS_RECT_Y: _scoreCanvasY
    },
    // Player life constants
    'PLAYER_LIFE':{
      'INITIAL_LIFE': 3,
      'LIFE_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Lives: ",
        'CANVAS_WIDTH': _p_life_canvasWidth,
        'CANVAS_HEIGHT': _scoreCanvasHeight,
        'TEXT_X': _p_life_x,
        'TEXT_Y': _scoreTextOffsetY
      },
      'SPRITE_X': _p_life_spriteX,
      'SPRITE_Y': _p_life_spriteY,
      'SPRITE_IMG': _p_life_spriteImg,
      'CANVAS_RECT_X': _p_life_spriteX,
      'CANVAS_RECT_Y': _scoreCanvasY
    }
  };

})(parameters);