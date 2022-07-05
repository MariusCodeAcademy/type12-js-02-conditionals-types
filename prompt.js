console.log('prompt.js is loaded');

// apskaiciuti apskritimo plota

let r = 10;
let pi = 3.14;
// pi * (r * r)

let plotas = pi * (r * r);

let resultString =
  'Jei spindulys yra ' + r + ' tai apskritimo plotas yra ' + plotas + '.';
console.log(resultString);

// ivedam kita spinduli
r = prompt('koks jusu apskritimo spindulys?');
plotas = pi * (r * r);
resultString = `Jei spindulys yra ${r} tai apskritimo plotas yra ${plotas}.`;
console.log(resultString);

// iskviesti ivedimo dialoga
// prompt('kiek dabar valandu');
// let valados = prompt('kiek dabar valandu');
// console.log('valados ===', valados);
// ekstra pranesimas vartotojui
// alert('kazkas kazur kazkaip');

// ekstra patvirtinimas
// confirm('ar tikrai norite istrinti faila');
