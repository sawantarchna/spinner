    //   const spinner = function(numOfTimes, delay) {
    //   let timers = 0;
    //   //these hold the states of the spinner
    //   const states = ["\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  "];
    //   //for n# of times you want the spinner to spin
    //   for (let i = 0; i < numOfTimes; i++) {
    //     //loop through each state
    //     for (let j = 0; j < states.length; j++)
    //     {
    //       if (i === (numOfTimes - 1) && j === (states.length - 1)) {
    //         setTimeout(() => {
    //           //add a newline once we reach the end
    //           process.stdout.write(states[j] + '\n');
    //         }, timers);
    //       } else {
    //         setTimeout(() => {
    //           process.stdout.write(states[j]);
    //         }, timers);
    //       }
    //       timers += delay;
    //     }
    //   }
    // };
    
    // spinner(10, 100);
  
  const charArray = ['|','/','-','\\','|','/','-','\\','|'];
  let delay = 100;
  for (let idx = 0; idx < charArray.length; idx++) {
      setTimeout(() => {
          let str = idx === charArray.length - 1 ? '\r' + charArray[idx] + '  \n' : '\r' + charArray[idx] + ' ';
          process.stdout.write(str);
      }, delay);
      delay += 200;
    }