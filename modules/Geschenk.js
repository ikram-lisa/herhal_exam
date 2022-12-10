function Geschenk(naam, prijs) {
  this.naam = naam;
  this.prijs = prijs;
}

Geschenk.prototype.printUit = function () {
  return `
Gift for :${this.naam}

`;
};
export default Geschenk;
