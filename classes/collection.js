const myMap = new Map();

console.log(myMap)

myMap.set('firstKey', 5);
myMap.set('secondKey', 15);

console.log(myMap)
console.log(myMap.get('secondKey'))

console.log(myMap.has('firstKey'))
console.log(myMap.has('thirdKey'))
myMap.delete('firstKey')

console.log(myMap.has('firstKey'))

