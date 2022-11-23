const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic World', 25, []);
    dinosaur1 = new Dinosaur('Brachiosaurus','herbivores',70);
    dinosaur2 = new Dinosaur('Stegosaurus','herbivores',100);
    dinosaur3 = new Dinosaur('Oviraptor','omnivores',45);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic World');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);

  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(park.collectionListSize(), 0 )
  });

  it('should be able to add a dinosaur to its collection', function () {  
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.collectionListSize(), 2);
    
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    assert.strictEqual(park.collectionListSize(), 1 );
    assert.deepStrictEqual(park.collection[0].species, 'Stegosaurus');
    
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    // let high;
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    // high = park.dinosaurMostVisitors()
    // assert.deepStrictEqual(high, 100);
    assert.deepStrictEqual(park.dinosaurMostVisitors(), 100);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.dinosaurOfParticularSpecies(dinosaur3.species), 2);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    // park.dinosaurAllVisitors();
    assert.deepStrictEqual(park.dinosaurAllVisitors(), 215)
    
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.VisitorsYearly(), 215*364);
  });
  

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.Revenue(), 215*364*25 );



  });


  xit('should be able to Remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur3);
    park.dinosaurRemoveParticularSpecies(dinosaur3.species);
    assert.deepStrictEqual(park.collectionListSize(), 2);
  
  });

  it('provide an object containing each of the diet types and the number of dinosaurs', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur3);
    // park.newList();
    assert.deepStrictEqual(park.newList(), { carnivore: 0 }, { herbivores: 2 }, { omnivores: 2 });
  
  });

});
