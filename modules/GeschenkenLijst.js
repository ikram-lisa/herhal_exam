import Geschenk from "./Geschenk.js";

function GeschenkenLijst(voornaam, achternaam, leeftijd) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.leeftijd = leeftijd;
  this.lijst = [];
}

GeschenkenLijst.prototype.addGift = function (naam, prijs) {
  this.lijst.forEach((e) => {
    if (!naam.includes(e)) {
      this.lijst.push(new Geschenk(naam, prijs));
    }
  });
};
GeschenkenLijst.prototype.removeGift = function (naam) {
  this.lijst = this.lijst.filter(function (e) {
    return e.naam !== naam;
  });
};

GeschenkenLijst.prototype.getNamesOfAllGifts = function () {
  let list = `${this.voornaam} ${this.achternaam} ${this.leeftijd}`;
  list += this.lijst
    .map(function (giftObj) {
      return giftObj.printUit();
    })
    .join(`------------------------------`);
  return list;
};

GeschenkenLijst.prototype.getTotalPrice = function () {
  let sum = 0;
  for (let i = 0; i < this.lijst.length; i++) {
    let num = prijs.replace(/[^-()\d/*+.€]/g, "");
    sum += parseInt(this.list[i].prijs.substring(0, num));
  }
  return sum;
};
export default GeschenkenLijst;
