/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person)
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10, 20, 30], 2],
  multiply: function () {
    this.numbers[0].map(function (number, numberIndex) {
      const result = number * this.numbers[1];
      console.log(result)
    }.bind(this))
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name) {
  try {
    let oneLetterIndex = name.trim().split(" ").some(el => { return el.length == 1 });

    if (oneLetterIndex) {
      return false;
      //console.log("Invalid Name!")
    }
    else if (!isNaN(Number(name)) || Number(name) == 0) {
      return false;
      //console.log("Invalid Name!")
    }
    else {
      return true;
      //console.log("Valid Name!")
    }
  }

  catch (e) {
    return false;
    //console.log("Invalid Name!")
  }
}

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi) {
  let product = Number(dersSayisi) * Number(dersSuresi);

  if(isNaN(product)){
    return false;
  }
  else if(!Boolean(product)){
    return false;
  }
  else if(Number(dersSayisi) === dersSayisi && dersSayisi % 1 !== 0){
    return false;
  }
  else {
    return true;
  }
}


