function tambahAngka(angka) {
  document.getElementById("layar").value += angka;
}

function hapus() {
  document.getElementById("layar").value = "";
}

function hapusSatu() {
  let layar = document.getElementById("layar");
  layar.value = layar.value.slice(0, -1);
}

function hitung() {
  let ekspresi = document.getElementById("layar").value;
  if (ekspresi) {
    try {
      document.getElementById("layar").value = eval(ekspresi);
    } catch {
      document.getElementById("layar").value = "Error";
    }
  }
}
