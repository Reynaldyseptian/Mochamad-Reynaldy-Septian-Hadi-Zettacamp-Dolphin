/////////
// Object
/////////

/*
   key value pair
   value : function , key : method
   value : selain function , key : property
*/

//////////
// Example
//////////
const captain = {
    name: "Gustian",
    pets: ["monkey", "bird", "fish"],
    active: false,
    height: 170,
    play: function (game) {
      console.log(`playing ${game}`);
    },
  };
  
  //////////////////
  // Acces with dot .
  //////////////////
  
//   console.log(captain.name);
//   console.log(captain.pets);
//   captain.play("Mobile legends");
  
  /////////////////////
  // accses with bracket []
  //////////////////////
  
//   console.log(captain["name"]);
//   console.log(captain["pets"]);
//   captain["play"]("Mobile legens");
  
  //////////////////
  // Changing value
  //////////////////
  
  captain.pets = "dog";
  captain.height = 169;
  captain.play = function (game) {
    console.log(`let's play some ${game}`);
  };
  
  captain.play("Mobile legends");
  console.log(captain["name"]);
  console.log(captain["pets"]);
  console.log(captain["height"]);

  
  //////////////////////
  // add new key
  ////////////////
  
//   captain.nationality = "Indonesia";
//   console.log(captain)
//   console.log(captain.nationality);
  
  //////////////////
  // Destructure
  //////////////////

  /*Destructuring adalah javascript expression yang digunakan untuk menyimpan value dari suatu array atau object ke dalam dalam variable yang berbeda. Kita bisa melakukan hal yang sama dengan menggunakan object destructuring*/ 
  
//   const { name, pets } = captain;
  
//   console.log(`My name is ${name}, and i have ${pets.length} pets`);
  

/////////////
// Delete
////////

// delete captain.nationality
// console.log(captain)