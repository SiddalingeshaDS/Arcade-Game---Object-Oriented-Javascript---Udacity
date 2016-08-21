/**
* @description Constants Object to hold the values
*/
CONSTANTS = function(){
  return {
    // Player constants
    'PLAYER': {
      INITIAL_POSITIONS: {'X' : 200, 'Y' : 400},
      OFFSETS: {        
        'LEFT' : {'X' : -101, 'Y' : 0},
        'UP' : {'X' : 0, 'Y' : -83},
        'RIGHT' : {'X' : 101, 'Y' : 0},
        'DOWN' : {'X' : 0, 'Y' : 83}
      },
      LIMITS: {
        'LEFT_X' : -83,
        'RIGHT_X' : 422,
        'TOP_Y' : 0,
        'BOTTOM_Y' : 400
      },
      COLLISION_RANGE: {
        'X' : 80,
        'Y' : 63
      },
      DEFAULT_PLAYER_TYPE : 'boy',
      SPRITE_DICT: {
        'BOY' : 'images/char-boy.png',
        'CAT_GIRL' : 'images/char-cat-girl.png',
        'HORN_GIRL' : 'images/char-horn-girl.png',
        'PINK_GIRL': 'images/char-pink-girl.png',
        'PRINCESS_GIRL': 'images/char-princess-girl.png'
      },
      DEFAULT_PREV_MOVE: '',
      DEFAULT_LEVEL: 0,
      DEFAULT_LIVES: 3
      
    }    
  };

}();