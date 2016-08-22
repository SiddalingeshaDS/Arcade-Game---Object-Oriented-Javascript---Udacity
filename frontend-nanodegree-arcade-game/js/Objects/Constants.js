/**
* @description Constants Object to hold the values
*/
CONSTANTS = (function(){
  
  var _canvasColWidth = 101;
  var _canvasRowHeight = 83;
  
  var _numberOfRows = 6;
  var _numberOfCols = 5; 
  
  var _numberOfStonePaths = _numberOfRows - 3;
  var _centerRowNumber = Math.ceil(_numberOfStonePaths/2);
  var _centerColNumber = Math.ceil(_numberOfCols/2);
  
  var _imgLoadList = [
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
  _backgroundRowImages[0] = 'images/water-block.png';
  for(var i=1; i<= _numberOfStonePaths; i++){
    _backgroundRowImages[i] = 'images/stone-block.png';
  }
  _backgroundRowImages[_numberOfRows - 2] = 'images/grass-block.png';
  _backgroundRowImages[_numberOfRows - 1] = 'images/grass-block.png';
  
  var _paddingBottom = 108;
  
  var _canvasWidth = _numberOfCols * _canvasColWidth;
  var _canvasHeight = _numberOfRows * _canvasRowHeight + _paddingBottom;
  
  var _scoreCanvasHeight = 100;
  
  // game constants
  var _game_initialPosX = _canvasColWidth * (_centerColNumber - 3);
  var _game_limitLeftX = _game_initialPosX;
  var _game_limitRightX = _canvasColWidth * (_centerColNumber + 1);
  var _game_players = {
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
  var _go_defaultObjType = 'blueGem';
  var _go_spriteDict = {
        'blueGem' : 'images/Gem Blue.png',
        'greenGem' : 'images/Gem Green.png',
        'orangeGem' : 'images/Gem Orange.png',
        'rock': 'images/Rock.png'
      };
  var _go_initialOffsetX = 0;
  var _go_initialOffsetY = 60;
  
  
  // enemy constants
  var _enemy_min_speed = 100;
  var _enemy_speed_variation = 300;
  var _enemy_initial_y = 60;
  var _enemy_sprite_img = 'images/enemy-bug.png';
  
  // player constants
  var _p_initial_x_offset = -2;
  var _p_initial_x = ((_centerColNumber - 1) * _canvasColWidth) + _p_initial_x_offset; //200
  var _p_initial_y_offset = -98;
  var _p_initial_y = (_numberOfRows * _canvasRowHeight) + _p_initial_y_offset;

  var _p_limit_right_x = (_numberOfCols - 1) * _canvasColWidth;
  var _p_limit_top_y = 0;
  var _p_limit_bottom_y = (_numberOfRows * _canvasRowHeight) + _p_initial_y_offset;
  
  var _p_collision_range_x = 80;
  var _p_collision_range_y = 63;
  
  var _p_default_player_type = 'boy';
  var _p_default_level = 0;
  var _p_default_lives = 3;
  
  var _score_text_y_offset = 50;
  var _score_canvas_y = 0;

  // player score constants
  var _p_score_canvas_width = 0.24 * _canvasWidth;
  var _p_score_x_offset = 10;
  var _p_canvas_x = 0;
  var _p_score_x = _p_canvas_x + _p_score_x_offset;
  var _p_score_default_val = {
        'FINISH': 5,
        'STAR': 5,
        'BLUE_GEM': 10,
        'GREEN_GEM': 15,
        'ORANGE_GEM': 25,
        'COLLISION': -5,
        'OFF_BOUND': -1,
        'ROCK': 0
      };
  
  // player life constants
  var _p_life_canvas_width = 0.36 * _canvasWidth;
  var _p_life_x_offset = 100;
  var _p_life_x = _p_score_canvas_width + _p_life_x_offset;
  var _p_life_sprite_x = _p_score_canvas_width;
  var _p_life_sprite_y = -45;
  var _p_life_sprite_img = 'images/Heart.png';
  
  // player level constants
  var _p_lev_canvas_width = 0.4 * _canvasWidth;
  var _p_lev_x_offset = 100;
  var _p_lev_x = _p_score_canvas_width + _p_life_canvas_width + _p_lev_x_offset;
  var _p_lev_sprite_x = _p_score_canvas_width + _p_life_canvas_width;
  var _p_lev_sprite_y = -60;
  var _p_lev_sprite_img = 'images/Star.png';
  
  
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
      'MIN_SPEED': _enemy_min_speed,
      'SPEED_VARIATION': _enemy_speed_variation,
      'X_INITIAL_OFFSET': -(_canvasColWidth),
      'Y_INITIAL_OFFSET': _enemy_initial_y,
      'ROW_HEIGHT': _canvasRowHeight,
      'NUMBER_OF_PATHS': _numberOfStonePaths,
      'SPRITE_IMG': _enemy_sprite_img
    },
    // Player constants
    'PLAYER': {
      'INITIAL_POSITIONS': {'X': _p_initial_x, 'Y': _p_initial_y},
      'OFFSETS': {        
        'LEFT': {'X': -(_canvasColWidth), 'Y': 0},
        'UP': {'X': 0, 'Y': -(_canvasRowHeight)},
        'RIGHT': {'X': _canvasColWidth, 'Y': 0},
        'DOWN': {'X': 0, 'Y': _canvasRowHeight}
      },
      'LIMITS': {
        'LEFT_X': _p_initial_x_offset,
        'RIGHT_X': _p_limit_right_x,
        'TOP_Y': _p_limit_top_y,
        'BOTTOM_Y': _p_limit_bottom_y
      },
      'COLLISION_RANGE': {
        'X': _p_collision_range_x,
        'Y': _p_collision_range_y
      },
      'DEFAULT_PLAYER_TYPE': _p_default_player_type,
      'SPRITE_DICT': _game_players,
      'DEFAULT_PREV_MOVE': '',
      'DEFAULT_LEVEL': _p_default_level,
      'DEFAULT_LIVES': _p_default_lives
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
      'INITIAL_LEVEL': _p_default_level,
      'LEVEL_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Level: ",
        'CANVAS_WIDTH': _p_lev_canvas_width,
        'CANVAS_HEIGHT': _scoreCanvasHeight,
        'TEXT_X': _p_lev_x,
        'TEXT_Y': _score_text_y_offset
      },
      'SPRITE_X': _p_lev_sprite_x,
      'SPRITE_Y': _p_lev_sprite_y,
      'SPRITE_IMG': _p_lev_sprite_img,
      'CANVAS_RECT_X': _p_lev_sprite_x,
      'CANVAS_RECT_Y': _score_canvas_y
    },
    // Player score constants
    'PLAYER_SCORE': {
      'INITIAL_SCORE': 0,
      'SCORE_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Score: ",
        'CANVAS_WIDTH': _p_score_canvas_width,
        'CANVAS_HEIGHT': _scoreCanvasHeight,
        'TEXT_X': _p_score_x,
        'TEXT_Y': _score_text_y_offset
      },
      'DEFAULT_SCORE_VALUES': _p_score_default_val,
      CANVAS_RECT_X: _p_canvas_x,
      CANVAS_RECT_Y: _score_canvas_y
    },
    // Player life constants
    'PLAYER_LIFE':{
      'INITIAL_LIFE': 3,
      'LIFE_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Lives: ",
        'CANVAS_WIDTH': _p_life_canvas_width,
        'CANVAS_HEIGHT': _scoreCanvasHeight,
        'TEXT_X': _p_life_x,
        'TEXT_Y': _score_text_y_offset
      },
      'SPRITE_X': _p_life_sprite_x,
      'SPRITE_Y': _p_life_sprite_y,
      'SPRITE_IMG': _p_life_sprite_img,
      'CANVAS_RECT_X': _p_life_sprite_x,
      'CANVAS_RECT_Y': _score_canvas_y
    }
  };

})();