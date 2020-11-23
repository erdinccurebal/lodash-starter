function square(n) {
    return n * n;
  }
   
  var wrapped = _([1, 2, 3]);
   
  // Returns an unwrapped value.
  wrapped.reduce(_.add);
  // => 6
   
  // Returns a wrapped value.
  var squares = wrapped.map(square);
   
  _.isArray(squares);
  // => false
   
  _.isArray(squares.value());
  // => true


// _ - Veriyi lodash için hazır eder.