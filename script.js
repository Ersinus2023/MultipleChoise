let sorular = [
        
 {
  "soru": "1) “Ich wohne nicht weit weg _ _ _ meiner Arbeit.",
  "a_sikki": " in ",
  "b_sikki": " von ",
  "c_sikki": " für ",
  "d_sikki": " zu ",
  "cevap": "B"
 },
 {
  "soru": "2) Welches Wort ist richtig? Sie war auf dem Weg _ _ _ Tennistraining. ",
  "a_sikki": " zur ",
  "b_sikki": " zu ",
  "c_sikki": " zum ",
  "d_sikki": " in",
  "cevap": "C"
 },
 {
  "soru": "3) Welches Wort ist richtig? Ich kann _ _ _ Füller nicht finden. Hast du ihn gesehen?",
  "a_sikki": " meinen ",
  "b_sikki": " meine ",
  "c_sikki": " meins ",
  "d_sikki": " mein",
  "cevap": "A"
 },
 {
  "soru": "4) Das Buch, _ _ _ du mir zum Geburtstag geschenkt hast, ist sehr spannend.",
  "a_sikki": " den ",
  "b_sikki": " das ",
  "c_sikki": " der ",
  "d_sikki": " die",
  "cevap": "B"
 },
 {
  "soru": "5) Gestern bin ich im Kino _ _ _.",
  "a_sikki": " gegangen ",
  "b_sikki": " gekommen ",
  "c_sikki": " gesehen ",
  "d_sikki": " gewesen",
  "cevap": "D"
 },
 {
  "soru": "6)Klaus _ _ _ das Buch zurück ins Regal _ _ _.",
  "a_sikki": " ist / gelegt ",
  "b_sikki": " hat / gelegen ",
  "c_sikki": " hat / gelegt ",
  "d_sikki": " ist / gelegt",
  "cevap": "C"
 },
 {
  "soru": "7)Claudia bleibt lieber zuhause, anstatt ins Kino _ _ _.",
  "a_sikki": "zu gehen",
  "b_sikki": "wegzugehen",
  "c_sikki": "nach",
  "d_sikki": "zum",
  "cevap": "A"
 },
 {
  "soru": "8)Was _ _ _ Herr Schneider von Beruf?",
  "a_sikki": "hat",
  "b_sikki": "sagt",
  "c_sikki": "ist",
  "d_sikki": "übt",
  "cevap": "C"
 },
 {
  "soru": "9)Wenn man Deutsch lernt, müssen viele Aufgaben gemacht _ _ _.",
  "a_sikki": " sollen",
  "b_sikki": " werden ",
  "c_sikki": " sollten ",
  "d_sikki": " würden",
  "cevap": "B"
 },
 {
  "soru": "10)Paula hat mich _ _ _ der Richtigkeit ihrer Aussagen überzeugt.",
  "a_sikki": " zu ",
  "b_sikki": " in ",
  "c_sikki": " aus ",
  "d_sikki": " von",
  "cevap": "D"
 }
];

let sorunun_cevabi = "";
let puan = 0;
let dogru_sayisi = 0;
let yanlis_sayisi = 0;
let soru_numarasi = 0;

function baslangic() {
    document.getElementById("soru_kutusu").style.display = "none";
    document.getElementById("skor_board").style.display = "none";

    sorunun_cevabi = "";
    puan = 0;
    dogru_sayisi = 0;
    yanlis_sayisi = 0;
    soru_numarasi = 0;
    skor_yaz();
}

function soru_getir(s_no) {
    document.getElementById("soru_kutusu").style.display = "block";
    document.getElementById("skor_board").style.display = "block"; 

    if (soru_numarasi == sorular.length) {
        swal({
            title: "Sorular Bitti",
            text: "Tebrikler",
            icon: "success",
            button: "Once Again..",
        }).then(function () { baslangic() });
    }
    document.getElementById("soru_metni").innerHTML = sorular[s_no].soru;
    document.getElementById("a_sikki").innerHTML = sorular[s_no].a_sikki;
    document.getElementById("b_sikki").innerHTML = sorular[s_no].b_sikki;
    document.getElementById("c_sikki").innerHTML = sorular[s_no].c_sikki;
    document.getElementById("d_sikki").innerHTML = sorular[s_no].d_sikki;
    sorunun_cevabi = sorular[s_no].cevap;
}

function skor_yaz() {
    document.getElementById("dogru_sayisi").innerHTML = dogru_sayisi;
    document.getElementById("yanlis_sayisi").innerHTML = yanlis_sayisi;
    document.getElementById("puan_yazisi").innerHTML = puan;
}

function verilen_cevap(hangi_sik) {
    kullanici_secimi = hangi_sik.getAttribute("data-secim");

    if (sorunun_cevabi == kullanici_secimi) {
        puan = puan + 10;
        dogru_sayisi++;
        skor_yaz();

        swal({
            title: "Sehr gut",
            text: "Tebrikler",
            icon: "success",
            button: "Weiter so!",
}).then(function () { soru_ilerlet() });

    } else {
        yanlis_sayisi++;
        skor_yaz();
        swal({
            title: "Leider",
            text: "Bilemedin",
            icon: "warning",
            button: "Leider!",
        }).then(function () { soru_ilerlet() });
    }
}

function soru_ilerlet() {
    soru_numarasi++;
    soru_getir(soru_numarasi)
} 
