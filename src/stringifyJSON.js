// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    if (obj) {
        return 'true';
    } else {
        return 'false';
    }
  } else if (typeof obj === 'string') {
    return "\"" + obj + "\"";
  } else if (Array.isArray(obj)) {
    var arrayOutput = [];

    obj.forEach(function(element) {
      arrayOutput.push(stringifyJSON(element));
    });

    return '[' + arrayOutput.join(',') + ']';
  } else if (typeof obj === 'object') {
    var objectOutput = [];

    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        objectOutput.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }

    return '{' + objectOutput.join(',') + '}';
  }
};
