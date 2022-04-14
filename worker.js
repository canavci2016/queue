function fibonacci(numMax) {
  for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++) {
    x = i + j;
    fibArray.find(s => s === x);
    fibArray.push(x);
  }
  return numMax;
}

onconnect = function (e) {
  var port = e.ports[0];

  port.onmessage = function (e) {
    port.postMessage(fibonacci(e.data[0]));
  };
};
