//Write function that returns the time since midnight in milliseconds

function past(h, m, s){
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
  }