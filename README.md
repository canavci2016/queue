# queue
advanced in memory queue for web workers

With following examples , you are able to create in-memory queue  without triggering it by hand. whenever an item which can be any type, is added into queue . it will do that for you as below. 

```javascript

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(4);
q.enqueue({f: 2});


q.enqueue((numMax) => {
  for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++) {
    x = i + j;
    fibArray.find(s => s === x);
    fibArray.push(x);
  }
  return numMax;
}, 1000000);

q.enqueue((numMax) => {
  for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < numMax; i = j, j = x, k++) {
    x = i + j;
    fibArray.find(s => s === x);
    fibArray.push(x);
  }
  return numMax;
}, 1000000);


```
