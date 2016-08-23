var Init = (function(global){
  
 
  
  _gameLevels = {
    'easy':  Utils.gameLevel.easy,
    'intermediate': Utils.gameLevel.intermediate,
    'hard': Utils.gameLevel.intermediate
  };
  
  CONSTANT_FUNCTION = ConstantWrapper(); 
  // instantiate the game
  game = new Game();

  // This listens for key presses and sends the keys to your
  // Game.handleInput() method.
   function gameEvents(e) {
      var allowedKeys = {
          37: 'left',
          39: 'right',
          13: 'enter'
      };
      game.handleInput(allowedKeys[e.keyCode]);
  }
  document.addEventListener('keyup', gameEvents);
  global.gameEvents = gameEvents;
  
  Engine(global);
})(this);
