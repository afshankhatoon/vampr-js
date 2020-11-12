class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberofVampires = 0;
    let currentVampire = this;
    while(currentVampire.creator){
      currentVampire = currentVampire.creator;
      numberofVampires++;
    }
    return numberofVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal<vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let numberOfVampires1 = this.numberOfVampiresFromOriginal;
    let numberOfVampires2 = vampire.numberOfVampiresFromOriginal;
    let ancestor1=this;
    let ancestor2=vampire;
    if(numberOfVampires1<numberOfVampires2){
      while(numberOfVampires1<numberOfVampires2){
        ancestor2=ancestor2.creator;
        numberOfVampires2--;
      }
    }else if(numberOfVampires1>numberOfVampires2){
      while(numberOfVampires1>numberOfVampires2){
        ancestor1=ancestor1.creator;
        numberOfVampires1--;
      }
    }
    while(ancestor1!==ancestor2){
        ancestor1=ancestor1.creator;
        ancestor2=ancestor2.creator;
    }
    return ancestor1;
  }
}

/* const original = new Vampire("original", "1000");
const ansel    = new Vampire("ansel", "1200");
const bart = new Vampire("bart", "1200");
const elgort   = new Vampire("elgort", "1300");
const sarah     = new Vampire("sarah", "1300");
const andrew = new Vampire("andrew", "1500");
original.addOffspring(ansel);
original.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);
console.log(original.numberOfOffspring);
console.log(sarah.numberOfVampiresFromOriginal);
console.log(sarah.isMoreSeniorThan(elgort));
console.log(sarah.closestCommonAncestor(original)); */
module.exports = Vampire;

