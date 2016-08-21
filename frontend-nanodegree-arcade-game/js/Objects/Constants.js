/**
* @description Constants Object to hold the values
*/
CONSTANTS = function(){
  return {
    // Player constants
    'PLAYER': {
      'INITIAL_POSITIONS': {'X' : 200, 'Y' : 400},
      'OFFSETS': {        
        'LEFT' : {'X' : -101, 'Y' : 0},
        'UP' : {'X' : 0, 'Y' : -83},
        'RIGHT' : {'X' : 101, 'Y' : 0},
        'DOWN' : {'X' : 0, 'Y' : 83}
      },
      'LIMITS': {
        'LEFT_X' : -83,
        'RIGHT_X' : 422,
        'TOP_Y' : 0,
        'BOTTOM_Y' : 400
      },
      'COLLISION_RANGE': {
        'X' : 80,
        'Y' : 63
      },
      'DEFAULT_PLAYER_TYPE' : 'boy',
      'SPRITE_DICT': {
        'BOY' : 'images/char-boy.png',
        'CAT_GIRL' : 'images/char-cat-girl.png',
        'HORN_GIRL' : 'images/char-horn-girl.png',
        'PINK_GIRL': 'images/char-pink-girl.png',
        'PRINCESS_GIRL': 'images/char-princess-girl.png'
      },
      'DEFAULT_PREV_MOVE': '',
      'DEFAULT_LEVEL': 0,
      'DEFAULT_LIVES': 3
    },
    'PLAYER_LEVEL': {
      'LEVEL_SETUP': [{
          'numberOfEnemies' : 1,
          'numberOfBlueGems': 1,
          'numberOfGreenGems': 0,
          'numberOfOrangeGems': 0,
          'numberOfRocks': 0
        },
        {
          'numberOfEnemies' : 2,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 0,
          'numberOfOrangeGems': 0,
          'numberOfRocks': 1
        },
        {
          'numberOfEnemies' : 3,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 1,
          'numberOfOrangeGems': 0,
          'numberOfRocks': 1
        },
        {
          'numberOfEnemies' : 3,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 1,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 1
        },
        {
          'numberOfEnemies' : 3,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 2
        },
        {
          'numberOfEnemies' : 5,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 2
        },
        {
          'numberOfEnemies' : 5,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 3
        },
        {
          'numberOfEnemies' : 5,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 4
        },
        {
          'numberOfEnemies' : 6,
          'numberOfBlueGems': 2,
          'numberOfGreenGems': 2,
          'numberOfOrangeGems': 1,
          'numberOfRocks': 5
        },
        {
          'numberOfEnemies' : 8,
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