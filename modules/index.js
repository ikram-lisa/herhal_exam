import GeschenkenLijst from "./GeschenkenLijst.js";

const geschenkenLijst = new GeschenkenLijst("ikram", "lamsa", "27");

geschenkenLijst.addGift("ikram", "300€");
geschenkenLijst.addGift("jan", "5€");
geschenkenLijst.addGift("Soraya", "1000€");
geschenkenLijst.addGift("ikram", "300€");
geschenkenLijst.removeGift("jan");
console.log(geschenkenLijst.getNamesOfAllGifts());
console.log(geschenkenLijst.getTotalPrice());
