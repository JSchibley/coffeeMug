exports.createSession = function () {
  var sessionInvestment = 0;
  var totalBugs = 0;
  var sessionComplete = false;
  var session = {
                    isCompleted: function() {
                      console.log('testCode:', totalBugs, 'Bugs');
                      console.log('sessionInvestment:', sessionInvestment, 'Units');
                      return (!totalBugs || sessionInvestment > 20);
                    },
                    code: function() {
                      sessionInvestment++
                      if (Math.random() < 0.5) {
                        totalBugs++
                      }
                      console.log('code');
                    },
                    debug: function() {
                      sessionInvestment++
                      if (totalBugs) {
                        if (Math.random() < 0.5) {
                          totalBugs--
                        }
                      }
                      console.log('debug');
                    },
                };



  console.log('Created Session');
  return session;
};

