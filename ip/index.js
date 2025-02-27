//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>*/
function getIpLocationData(ip) {
  axios
    .get("https://apis.ergineer.com/ipgeoapi/" + ip)
    .then(function (response) {
      bilesen(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
}
async function runApp() {
  await ipAdresimiAl();
  getIpLocationData(benimIP);
}

runApp();

/*NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
const bilesen = (object) => {
  const cardsGiven = document.querySelector(".cards");
  const cardDiv = document.createElement("div");
  cardsGiven.appendChild(cardDiv);
  cardDiv.classList.add("card");

  const cardImg = document.createElement("img");
  cardImg.src = `https://flagcdn.com/w320/${object[
    "ülkeKodu"
  ].toLowerCase()}.png`;

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  cardDiv.appendChild(cardImg);
  cardDiv.appendChild(cardInfo);

  const cardH3 = document.createElement("h3");
  cardH3.classList.add("ip");
  cardH3.textContent = object["sorgu"];

  const ulke = document.createElement("p");
  ulke.classList.add("ulke");
  ulke.textContent = object[("ülke", "ülkeKodu")];

  const enBoy = document.createElement("p");
  enBoy.textContent = `Enlem: ${object["enlem"]} Boylam: ${object["boylam"]}`;

  const sehir = document.createElement("p");
  sehir.textContent = `Şehir: ${object["şehir"]}`;

  const saat = document.createElement("p");
  saat.textContent = `Saat dilimi: ${object["saatdilimi"]}`;

  const para = document.createElement("p");
  para.textContent = `Para birimi: ${object["parabirimi"]}`;

  const isp = document.createElement("p");
  isp.textContent = `ISP: ${object["isp"]}`;

  cardInfo.append(cardH3, ulke, enBoy, sehir, saat, para, isp);

  // return cardDiv;
};
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
