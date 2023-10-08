// If, else, nested if

let bilangan = -2;

if (isNaN(bilangan)) {
  console.log('Input yang Anda masukkan bukan sebuah bilangan.');
} else {
  if (bilangan > 0) {
    console.log('Bilangan ini adalah positif.');
  } else if (bilangan < 0) {
    console.log('Bilangan ini adalah negatif.');
  } else {
    console.log('Bilangan ini adalah nol.');
  }
}

// switch case

let nomorHari = 4;

switch (nomorHari) {
  case 1:
    namaHari = 'Minggu';
    break;
  case 2:
    namaHari = 'Senin';
    break;
  case 3:
    namaHari = 'Selasa';
    break;
  case 4:
    namaHari = 'Rabu';
    break;
  case 5:
    namaHari = 'Kamis';
    break;
  case 6:
    namaHari = 'Jumat';
    break;
  case 7:
    namaHari = 'Sabtu';
    break;
  default:
    namaHari = 'Hari tidak valid';
    break;
}

console.log('Nama hari adalah: ' + namaHari);

// for statement

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while, do while

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i <= 10);

// function

let kuadrat = function (x) {
  let hasil = x * x;
  console.log('Hasil kuadrat adalah: ' + hasil);
};

let hasilKuadrat = kuadrat(5);

