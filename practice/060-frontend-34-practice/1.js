let obj = {
  a: { foo: 2 },
  yo: [3, 5],
  b: {
    la: {
      name: 'Wood',
      x: [5, 'a', 'c'],
      muhaha: ['Bob', 'Huahua'],
      length: 100,
    },
  },
};

let a = obj.yo.length;
let b = obj.b.la.x.length;
let c = obj.b.la.muhaha.length;

console.log(a + b + c);