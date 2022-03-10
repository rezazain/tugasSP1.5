// Hasil Mean //

var nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];
var mean = [9];
var jmlhNilai = 5 + 9 + 6 + 7 + 9 + 8 + 10 + 7 + 8;
var hasilMean = jmlhNilai / mean;

document.write("Mean = ", hasilMean + "&nbsp" + "//");
console.log(hasilMean);

// Hasil Mean //
// Hasil Median //

var median = [2];
var nilaiSantri2 = nilaiSantri.map(function (e) {
  return e;
});

nilaiSantri2.sort(function (a, b) {
  return a - b;
});

document.write("&nbsp" + nilaiSantri2);

var hasilMedian = nilaiSantri2.slice(4, 5);

document.write(
  "&nbsp" + " ( Median =",
  "&nbsp" + hasilMedian + " )" + " &nbsp " + "//"
);
console.log(hasilMedian.join());

// Hasil Median //
//  Hasil Modus //

function Modus() {
  nilaiSantri2.sort(function (a, b) {
    return a - b;
  });

  var modus = [],
    count = [],
    maxIndex = 0,
    i,
    number;

  for (i = 0; i < nilaiSantri2.length; i += 1) {
    number = nilaiSantri2[i];
    count[number] = (count[number] || 0) + 1;

    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modus.push(Number(i));
      }
    }

  return modus;
}

document.write("&nbsp" + "Modus : " + Modus() + " &nbsp " + "//");

// Hasil Modus
// Simpangan Baku

function SimpanganBaku() {
  const n = nilaiSantri2.length;
  const mean = nilaiSantri2.reduce((a, b) => a + b) / n;

  return Math.sqrt(
    nilaiSantri2.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

document.write("&nbsp" + "Simpangan Baku : " + SimpanganBaku());
