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
  
  // player constants
  var _p_initial_x_offset = -2;
  var _p_initial_x = ((_center_col_number - 1) * _canvasColWidth) + _p_initial_x_offset; //200
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
  var _p_canvas_x = ((_center_col_number - 3) * _canvasColWidth);
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
  var _p_life_x_offset = 18;
  var _p_life_x = ((_center_col_number - 1) * _canvasColWidth) + _p_life_x_offset;
  var _p_life_sprite_x = _p_score_canvas_width;
  var _p_life_sprite_y = -45;
  
  // player level constants
  var _p_lev_canvas_width = 0.4 * _canvasWidth;
  var _p_lev_x_offset = -4;
  var _p_lev_x = ((_center_col_number + 1) * _canvasColWidth) + _p_lev_x_offset;
  var _p_lev_sprite_x = _p_score_canvas_width + _p_life_canvas_width;
  var _p_lev_sprite_y = -60;
  
  
  
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
      'SPRITE_IMG': 'images/Star.png',
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
      'SPRITE_IMG': 'images/Heart.png',
      'CANVAS_RECT_X': _p_life_sprite_x,
      'CANVAS_RECT_Y': _score_canvas_y
    }
  };

})();