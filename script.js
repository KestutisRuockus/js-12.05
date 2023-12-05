// fibonacci seka: - sudedami pries tai du buvusieji skaicius.

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let fibonacci = [0, 1];

// for (let i = 2; i < 50; i++) {
//   fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
// }
// console.log(fibonacci);

//      1.
console.log(`1užd.`);
let list = [];

//      a)
console.log(`a)`);
for (let i = 0; i < 20; i++) {
  list.push(i);
}
console.log(list);

//      b)
list = []; //reset list
for (let i = 1; i <= 20; i++) {
  list.push(i);
}
console.log(`b)`);
console.log(list);

//      c)
console.log(`c)`);
list = []; //reset list
for (let i = 0; i < 20; i++) {
  list.push(i);
}
list.reverse();
console.log(list);

//      d)
console.log(`d)`);
list = []; //reset list
for (let i = 20; i <= 39; i++) {
  list.push(i);
}
console.log(list);

//      e)
console.log(`e)`);
list = []; //reset list
for (let i = 20; i < 50; i++) {
  list.push(i);
}
list.reverse();
console.log(list);

//      f)
console.log(`f)`);
list = []; //reset list
for (let i = 0; i < 20; i++) {
  list.push(random(0, 10));
}
console.log(list);

//      2.
console.log(`2užd.`);
let secondList = [];
let text;
for (let i = 0; i < 20; i++) {
  secondList.push(i);
}
text = secondList.join(" -> ");
console.log(text);

//      3.
//      a)
console.log(`a)`);
let thirdList = [];

for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  if (thirdList[i] % 2 === 0) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      b)
console.log(`b)`);
thirdList = [];
for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  if (thirdList[i] % 2 !== 0) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      c)
console.log(`c)`);
thirdList = [];
for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  if (thirdList[i] % 3 === 0) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      d)
console.log(`d)`);
thirdList = [];

for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  console.log(
    `tikrinamas indekas masyve: ${i}, indekso reiksme: ${thirdList[i]}`
  );
  if (thirdList[i] === i) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      e)
console.log(`e)`);
thirdList = [];

for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  if (thirdList[i] < 5 || thirdList[i] > 8) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      f)
console.log(`f)`);
thirdList = [];

for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  // if (2 <= thirdList[i] <= 5) {
  if (thirdList[i] >= 2 && thirdList[i] <= 5) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      g)
console.log(`g)`);
thirdList = [];

for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  if (i === thirdList.length - 1) {
    i = thirdList[0];
    // console.log(`last ${i}`);
    break;
  } else if (thirdList[i] + thirdList[i + 1] >= 10) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      h)
console.log(`h)`);
thirdList = [];

for (let i = 0; i < 20; i++) {
  thirdList.push(random(0, 10));
}

for (let i = 0; i < thirdList.length; i++) {
  if (i === thirdList.length - 1) {
    i = thirdList[0];
    // console.log(`last ${i}`);
    break;
  } else if ((thirdList[i] + thirdList[i + 1]) % 2 === 0) {
    thirdList.splice(i, 1);
    i--;
  }
}
console.log(thirdList);

//      4uzd
console.log(`4užd.`);

let str = "";
let sk1 = random(65, 90),
  sk2 = random(97, 122);
let skaicius = random(sk1, sk2);
if (skaicius >= 91 && skaicius <= 96) skaicius = 90;
str = String.fromCharCode(skaicius);
console.log(str);

//      5uzd
console.log(`5užd.`);
let random100 = [];
console.log(random100.length);
for (let i = 0; i < 100; i++) {
  let randNum = random(1, 100);
  if (randNum < 40 || randNum > 60) random100.push(randNum);
  else i--;
}
// while (random100.length < 100) {
//   let randNum = random(0, 100);
//   random100.push(randNum);
//   if (randNum < 40 || randNum > 60) random100.push(randNum);
// }
console.log(random100);

//      5uzd
console.log(`6užd.`);
console.log(`document.write`);
for (let i = 0; i < random100.length; i++) {
  if (random100[i] % 2 === 0)
    document.write(`<div style="color: green;">${random100[i]}</div>`);
  else document.write(`<div style="color: red;">${random100[i]}</div>`);
}

console.log(`7užd.`);
let list80 = [];
let sumOfListItems = (average = 0);
for (let i = 0; i < 80; i++) {
  let randNum = random(8, 32);
  sumOfListItems += randNum;
  list80.push(randNum);
}
average = sumOfListItems / list80.length;
console.log(list80);
console.log(`masyvo skaiciu suma: ${sumOfListItems}`);
console.log(`masyvo vidurkis: ${average.toFixed(2)}`);
