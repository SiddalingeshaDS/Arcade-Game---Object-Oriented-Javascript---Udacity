/**
* @description Constants Object to hold the values
*/
CONSTANTS = (function(){
  
  var _canvasColWidth = 101;
  var _canvasRowHeight = 83;
  
  var _numberOfRows = 6;
  var _numberOfCols = 5; 
  
  var _number_of_stone_paths = _numberOfRows - 3;
  var _center_row_number = Math.ceil(_number_of_stone_paths/2);
  var _center_col_number = Math.ceil(_numberOfCols/2);
  
  
  // engine constants
  var _background_row_images = [];
  _background_row_images[0] = 'images/water-block.png';
  for(var i=1; i<= _number_of_stone_paths; i++){
    _background_row_images[i] = 'images/stone-block.png';
  }
  _background_row_images[_numberOfRows - 2] = 'images/grass-block.png';
  _background_row_images[_numberOfRows - 1] = 'images/grass-block.png';
  
  var _paddingBottom = 108;
  
  var _canvasWidth = _numberOfCols * _canvasColWidth;
  var _canvasHeight = _numberOfRows * _canvasRowHeight + _paddingBottom;
  
  var _scoreCanvasHeight = 100;
  
  // game constants
  var _game_initial_pos_x = _canvasColWidth * (_center_col_number - 3);
  var _game_limit_left_x = _game_initial_pos_x;
  var _game_limit_right_x = _canvasColWidth * (_center_col_number + 1);
  var _game_players = {
      'boy': 'images/char-boy.png',
      'cat-girl': 'images/char-cat-girl.png',
      'horn-girl': 'images/char-horn-girl.png',
      'pink-girl': 'images/char-pink-girl.png',
      'princess-girl': 'images/char-princess-girl.png'
    };
  var _game_player_types = [];
  var _game_bg_images = [];
  for(var _player_type in _game_players){
     if (_game_players.hasOwnProperty(_player_type)) {
       _game_player_types.push(_player_type);
       _game_bg_images.push(_game_players[_player_type]);
    }
  }
  
  var _game_img_coordinates_y_offset = -50;
  var _game_bg_img_coordinates = [];
  var _number_of_player_types = _game_player_types.length;
  
  for(var i=0; i<_number_of_player_types; i++){
    var _temp = _game_limit_left_x + i * _canvasColWidth;
    _game_bg_img_coordinates[i] = {'X': _temp, 'Y': (_center_row_number * _canvasRowHeight) + _game_img_coordinates_y_offset};
  }
  
  var _game_start_x_offset = 10;
  var _game_start_x = ((_center_col_number - 3) * _canvasColWidth) + _game_start_x_offset;
  
  var _game_start_y_offset = 81;
  var _game_start_y = ((_center_row_number + 1) * _canvasRowHeight) + _game_start_y_offset;
  
  
  var _game_end_x_offset = -1;
  var _game_end_x = ((_center_col_number - 2) * _canvasColWidth) + _game_end_x_offset;
  
  var _game_end_y_offset = 114;
  var _game_end_y = ((_center_row_number) * _canvasRowHeight) + _game_end_y_offset;
  
  var _game_sprite_img_y_offset = -36;
  var _game_sprite_img_y = (_center_row_number * _canvasRowHeight) + _game_sprite_img_y_offset;
      
  // game objects constants
  var _go_default_obj_type = 'blueGem';
  var _go_sprite_dict = {
        'blueGem' : 'images/Gem Blue.png',
        'greenGem' : 'images/Gem Green.png',
        'orangeGem' : 'images/Gem Orange.png',
        'rock': 'images/Rock.png'
      };
  var _go_initial_x_offset = 0;
  var _go_initial_y_offset = 60;
  
  
  // enemy constants
  var _enemy_min_speed = 100;
  var _enemy_speed_variation = 300;
  var _enemy_initial_y = 60;
  var _enemy_sprite_img = 'images/enemy-bug.png';
  
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
      'BACKGROUND_ROW_IMAGES': _background_row_images,
      'NUMBER_OF_ROWS': _numberOfRows,
      'NUMBER_OF_COLS': _numberOfCols,
      'ROW_HEIGHT': _canvasRowHeight,
      'COL_WIDTH': _canvasColWidth,
      'IMG_LOAD_LIST': [
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
      ]
    },
    // Game Constants
    'GAME': {
      'INITIAL_POSITIONS': {'X': _game_initial_pos_x},
      'INITIAL_PLAYER_NUM': 0,
      'OFFSETS': {        
        'LEFT': {'X': -(_canvasColWidth) },
        'RIGHT': {'X': _canvasColWidth }
      },
      'LIMITS': {
        'LEFT_X': _game_limit_left_x,
        'RIGHT_X': _game_limit_right_x
      },
      'PLAYER_OFFSETS': {
        'LEFT': -1,
        'RIGHT': 1
      },
      'PLAYER_TYPES': _game_player_types,
      'GAME_START_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Select the player and Hit Enter to Start the Game.",
        'TEXT_X': _game_start_x,
        'TEXT_Y': _game_start_y
      },
      'GAME_END_RENDER_SETUP': {
        'FONT': "50px Arial",
        'TEXT': "GAME OVER!",
        'FILL_STYLE': 'red',
        'TEXT_X': _game_end_x,
        'TEXT_Y': _game_end_y
      },
      'INITIAL_PLAYER': null,
      'BACKGROUND_ROW_IMAGES': _game_bg_images,
      'BACKGROUND_IMG_COORDINATES': _game_bg_img_coordinates,
      'SPRITE_IMG': 'images/Selector.png',
      'SPRITE_IMG_Y': _game_sprite_img_y,

    },
    // Game Objects constants
    'GAME_OBJECTS': {
      'HIDE_OFFSETS': {
        'TOP_X': -(_canvasColWidth),
        'TOP_Y': -(_canvasRowHeight)
      },
      'DEFAULT_OBJ_TYPE': _go_default_obj_type,
      'SPRITE_DICT': _go_sprite_dict,
      'X_INITIAL_OFFSET': _go_initial_x_offset,
      'Y_INITIAL_OFFSET': _go_initial_y_offset,
      'ROW_HEIGHT': _canvasRowHeight,
      'COL_WIDTH': _canvasColWidth,
      'NUMBER_OF_ROWS': _number_of_stone_paths,
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
      'NUMBER_OF_PATHS': _number_of_stone_paths,
      'SPRITE_IMG': _enemy_sprite_img
    },
    // Player constants
    'PLAYER': {
      'INITIAL_POSITIONS': {'X': 200, 'Y': 400},
      'OFFSETS': {        
        'LEFT': {'X': -101, 'Y': 0},
        'UP': {'X': 0, 'Y': -83},
        'RIGHT': {'X': 101, 'Y': 0},
        'DOWN': {'X': 0, 'Y': 83}
      },
      'LIMITS': {
        'LEFT_X': -83,
        'RIGHT_X': 422,
        'TOP_Y': 0,
        'BOTTOM_Y': 400
      },
      'COLLISION_RANGE': {
        'X': 80,
        'Y': 63
      },
      'DEFAULT_PLAYER_TYPE': 'boy',
      'SPRITE_DICT': {
        'boy': 'images/char-boy.png',
        'cat-girl': 'images/char-cat-girl.png',
        'horn-girl': 'images/char-horn-girl.png',
        'pink-girl': 'images/char-pink-girl.png',
        'princess-girl': 'images/char-princess-girl.png'
      },
      'DEFAULT_PREV_MOVE': '',
      'DEFAULT_LEVEL': 0,
      'DEFAULT_LIVES': 3
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
      'INITIAL_LEVEL': 0,
      'LEVEL_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Level: ",
        'CANVAS_WIDTH': 203,
        'CANVAS_HEIGHT': 101,
        'TEXT_X': 400,
        'TEXT_Y': 50
      },
      'SPRITE_X': 300,
      'SPRITE_Y': -60,
      'SPRITE_IMG': 'images/Star.png',
      'CANVAS_RECT_X': 300,
      'CANVAS_RECT_Y': 0
    },
    // Player score constants
    'PLAYER_SCORE': {
      'INITIAL_SCORE': 0,
      'SCORE_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Score: ",
        'CANVAS_WIDTH': 120,
        'CANVAS_HEIGHT': 101,
        'TEXT_X': 10,
        'TEXT_Y': 50
      },
      'DEFAULT_SCORE_VALUES': {
        'FINISH': 5,
        'STAR': 5,
        'BLUE_GEM': 10,
        'GREEN_GEM': 15,
        'ORANGE_GEM': 25,
        'COLLISION': -5,
        'OFF_BOUND': -1,
        'ROCK': 0
      },
      CANVAS_RECT_X: 0,
      CANVAS_RECT_Y: 0
    },
    // Player life constants
    'PLAYER_LIFE':{
      'INITIAL_LIFE': 3,
      'LIFE_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Lives: ",
        'CANVAS_WIDTH': 180,
        'CANVAS_HEIGHT': 101,
        'TEXT_X': 220,
        'TEXT_Y': 50
      },
      'SPRITE_X': 120,
      'SPRITE_Y': -45,
      'SPRITE_IMG': 'images/Heart.png',
      'CANVAS_RECT_X': 120,
      'CANVAS_RECT_Y': 0
    }
  };

})();