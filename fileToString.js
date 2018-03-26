var fs = require("fs");

module.exports = {
  readFile: fileName => {
    var data = fs.readFileSync(fileName);
    data = data.toString();

    var Box = x => ({
      map: f => Box(f(x)),
      fold: f => f(x),
      inspect: () => `Box(${x})`
    });

    return Box(data).fold(x => x.split("\n"));
  }
};
