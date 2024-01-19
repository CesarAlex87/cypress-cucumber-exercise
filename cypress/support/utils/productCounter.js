const counter = () => {
    let count = 0;
  
    const increment = () => {
      count += 1;
    };
  
    const get = () => count;
  
    const reset = () => {
      count = 0;
    };

    return {
      increment,
      get,
      reset,
    };
  };
  
  const scenarioCounter = counter();
  
  module.exports = scenarioCounter;
  