exports.createMug = function () {
  var sips = 5;
  var coffeeMug = {
                    isEmpty: function() {
                      console.log('checkMug:', sips, 'sips remain');
                      return sips < 1;
                    },
                    refill: function() {
                      console.log('Mug refilled');
                      sips = 5;
                    },
                    drink: function() {
                      sips--;
                      console.log('drink');
                    },
                };

  console.log('Created CoffeeMug');
  return coffeeMug;
};

exports.createMaker = function () {
  var pours = 5;
  var coffeeMaker = {
                    isEmpty: function() {
                      console.log('checkMaker:', pours, 'pours remain');
                      return pours < 1;
                    },
                    refill: function() {
                      console.log('refillMaker');
                      pours = 5;
                    },
                    dispense: function(receptacle) {
                      pours--;
                      console.log('dispense');
                      receptacle.refill()
                    },
                };

  console.log('Created CoffeeMaker');
  return coffeeMaker;
};

