var project = require('./project');
var coffee = require('./coffee');

const workSession = project.createSession();
const coffeeMug = coffee.createMug();
const keurig = coffee.createMaker();

do {
  coffeeMug.drink();
  workSession.code();
  workSession.debug();

  if (coffeeMug.isEmpty()) {
    if (keurig.isEmpty()) {
      keurig.refill();
    }
    keurig.dispense(coffeeMug);
  }
} while (!workSession.isCompleted());
