
const Park = function (name, ticketPrice, collection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collection = collection;
  }
  
  module.exports = Park;

Park.prototype.collectionListSize = function(){
    return this.collection.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.collection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.collection.indexOf(dinosaur);
    // console.log(index);
    // console.log(this.collection);
    this.collection.splice(index, 1);
    // species = this.collection.dinosaur[0];
    // console.log(species);

}

Park.prototype.dinosaurMostVisitors = function(){
    let high = 0;
    for (const dinosaur of this.collection)
    {
        if (dinosaur.guestsAttractedPerDay >= high)
        {
            high = dinosaur.guestsAttractedPerDay;
        }
    }

    // const sorted = object.entries(this.collection.guestsAttractedPerDay);
    // console.log(high);
    return high;
}

Park.prototype.dinosaurOfParticularSpecies = function(species){
    let list = [];
    for (const dinosaur of this.collection)
    {       
        // console.log(dinosaur);

        if (dinosaur.species === species)
        {   
            list.push(dinosaur);

        }
    }
    // console.log(list.length);
    return list.length;
}

Park.prototype.dinosaurAllVisitors = function(){
    let total = 0;
    for (const dinosaur of this.collection)
    {
        total += dinosaur.guestsAttractedPerDay;
        
    }
    return  total;
}

Park.prototype.VisitorsYearly = function(){
    let total = 0;
    total = this.dinosaurAllVisitors() * 364;
    // console.log(total);
    return total;
}

Park.prototype.Revenue = function(){
    let total = this.VisitorsYearly() * this.ticketPrice;
    return  total;
}


// extension 

Park.prototype.dinosaurRemoveParticularSpecies = function(species){
console.log(this.collection);
    for (const dinosaur of this.collection)
    {       
        console.log(dinosaur);

        if (dinosaur.species === species)
        { this.removeDinosaur(dinosaur);

        }
    }
   

}

Park.prototype.newList = function(){
let list = [];
let number1= 0;
let number2 = 0;
let number3 = 0;
    for (const dinosaur of this.collection)
    {  
        // console.log(dinosaur);
        if (dinosaur.diet === 'carnivore')
        {   number1++;
            // list.push({'carnivore': number});
        } 
        else if (dinosaur.diet === 'herbivores')
        {   number2++;
            // list.push({'herbivores': number});
        } 
        else 
        {
            number3++;
            // list.push({'omnivores': number});
        }

    }
    list.push({'carnivore': number1}, {'herbivores': number2}, {'omnivores': number3});
    console.log(list);
    return list[0];
}
