/**
* @description Constants Object to hold the values
*/
CONSTANTS = function(){
  return {
    //Game Constants
    'GAME': {
      'INITIAL_POSITIONS': {'X': 0, 'Y': 213},
      'INITIAL_PLAYER_NUM': 0,
      'OFFSETS': {        
        'LEFT': {'X': -101, 'Y': 0},
        'RIGHT': {'X': 101, 'Y': 0}
      },
      'LIMITS': {
        'LEFT_X': 0,
        'RIGHT_X': 422
      },
      'PLAYER_OFFSETS': {
        'LEFT': -1,
        'RIGHT': 1
      },
      'PLAYER_TYPES': [
        'boy',
        'cat-girl',
        'horn-girl',
        'pink-girl',
        'princess-girl'
      ],
      'GAME_START_RENDER_SETUP': {
        'FONT': "22px Arial",
        'TEXT': "Select the player and Hit Enter to Start the Game.",
        'TEXT_X': 10,
        'TEXT_Y': 330
      },
      'GAME_END_RENDER_SETUP': {
        'FONT': "50px Arial",
        'TEXT': "GAME OVER!",
        'FILL_STYLE': 'red',
        'TEXT_X': 100,
        'TEXT_Y': 280
      },
      'INITIAL_PLAYER': null,
      'BACKGROUND_ROW_IMAGES': [
            'images/char-boy.png',   // Boy
            'images/char-cat-girl.png',   // Cat Girl
            'images/char-horn-girl.png',   // Horn Girl
            'images/char-pink-girl.png',   // Pink Girl
            'images/char-princess-girl.png'   // Princess Girl
          ],
      'BACKGROUND_IMG_COORDINATES': [
        {'X': 0, 'Y': 116},
        {'X': 101, 'Y': 116},
        {'X': 202, 'Y': 116},
        {'X': 303, 'Y': 116},
        {'X': 404, 'Y': 116}
      ],
      'SPRITE_IMG': 'images/Selector.png',
      'SPRITE_IMG_Y': 130,

    },
    // Game Objects constants
    'GAME_OBJECTS': {
      'HIDE_OFFSETS': {
        'TOP_X': -101,
        'TOP_Y': -83
      },
      'DEFAULT_OBJ_TYPE': 'blueGem',
      'SPRITE_DICT': {
        'blueGem' : 'images/Gem Blue.png',
        'greenGem' : 'images/Gem Green.png',
        'orangeGem' : 'images/Gem Orange.png',
        'rock': 'images/Rock.png'
      },
      'X_INITIAL_OFFSET': 0,
      'Y_INITIAL_OFFSET': 60,
      'ROW_HEIGHT': 83,
      'ROW_WIDTH': 101,
      'NUMBER_OF_ROWS': 5,
      'NUMBER_OF_COLS': 3
    },
    // Enemy Constants
    'ENEMY': {
      'CANVAS_WIDTH': 505,
      'MIN_SPEED': 100,
      'SPEED_VARIATION': 300,
      'X_INITIAL_OFFSET': -101,
      'Y_INITIAL_OFFSET': 60,
      'ROW_HEIGHT': 83,
      'NUMBER_OF_PATHS': 3,
      'SPRITE_IMG': 'images/enemy-bug.png'
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
        'cat-girl;': 'images/char-cat-girl.png',
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

}();