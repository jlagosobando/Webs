//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
  constructor(name, health, damage) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = damage;
  }
  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    console.log(`${this.name} inflige ${this.damage} de daño a ${target.name}`);
    target.health -= this.damage;
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;
  }
}

//Función para combatir
function fight(firstCharacter, secondCharacter) {
  console.log("Empieza el combate!");
  console.log(hero.status());
  console.log(enemy.status());
  while (true) {

    //Primer personaje ataca si esta vivo
    if (firstCharacter.isAlive()) {
      firstCharacter.attack(secondCharacter);
      console.log(hero.status());
      console.log(enemy.status());
    } else {
      console.log(`${firstCharacter.name} died!`);
      break;
    }

    //Segundo personaje ataca si esta vivo
    if (secondCharacter.isAlive()) {
      secondCharacter.attack(firstCharacter);
      console.log(hero.status());
      console.log(enemy.status());
    } else {
      console.log(`${secondCharacter.name} died!`);
      break;
    }
  }
}

//Creación de personajes
const hero = new Character("Heroe", 100, 110);
const enemy = new Character("Limo", 500, 40);

//Comenzar combate
fight(hero, enemy);
