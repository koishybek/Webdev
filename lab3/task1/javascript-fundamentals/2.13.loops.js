let i = 3;
while (i) {
  alert( i-- );
}
let i2 = 0;
while (++i2 < 5) alert( i2 );
let i3 = 0;
while (i3++ < 5) alert( i3 );
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
let i4 = 0;
while (i4 < 3) {
  alert( `number ${i4}!` );
  i4++;
}
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  alert( i ); 
}