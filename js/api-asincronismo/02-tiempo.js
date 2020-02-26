/* TEST #1

setTimeout(() => console.log('100ms'), 100)
setTimeout(() => console.log('200ms'), 200)
setTimeout(() => console.log('400ms'), 400)
setTimeout(() => console.log('800ms'), 800)
setTimeout(() => console.log('1600ms'), 1600)
console.log('a')
console.log('b')
console.log('c')
console.log('d')
console.log('e')
*/

/* TEST #2 

setTimeout(() => console.log('A - 0ms'), 0)
console.log('B')
console.log('C')
console.log('D')
*/

/* TEST #3 

setTimeout(() => console.log('A - 500ms'), 500)
setTimeout(() => console.log('B - 1000ms'), 1000)
console.log('C')
setTimeout(() => console.log('D - 250ms'), 250)
console.log('E')
*/

/* TEST #4

setTimeout(() => console.log('A - 100ms'), 100)
for(var i = 0; i < 900000000; i++){

}
*/
