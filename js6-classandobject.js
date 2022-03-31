class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  fullname() {
    console.log(this.firstname + " " + this.lastname);
  }
}

// let person1 = new Person("Anggun", "Permata");
// person1.fullname();
// console.log(person1.firstname);

// GETTERS AND SETTERS
class PersonV2 {
  #firstname;
  #lastname;
  constructor (firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
  get fullname(){
    return this.#firstname + " " + this.#lastname;
  }
}

// let person2 = new PersonV2("Anggun", "Permata");
// console.log(person2.firstname);
// person2.firstname ="xAnggun";
// console.log(person2.firstname);

// INHERITANCE
class Marketplace{
  constructor(market_type, location, count_investor) {
    this.market_type = market_type;
    this.location = location;
    this.count_investor = count_investor;
  }
  location() {
    console.log("this market was located at ", this.location);
  }
  market_type() {
    console.log("market type : ", this.market_type);
  }
  add_investor(count_investor) {
      this.count_investor += count_investor;
      console.log("Number of current investor = ", this.count_investor);
  }
}

let market = new Marketplace("Supermarket", "Jambi", 2);
market.add_investor(3);

class MyMart extends Marketplace {
  constructor(market_name, owner_name, market_type, location, count_investor){
    super(market_type, location, count_investor);
    this.market_name = market_name;
    this.owner_name = owner_name;
  }
  info() {
    let market_infos = {
      market_name : this.market_name,
      owner: this.owner_name,
      market_type: this.market_type,
      location: this.location,
      count_investor: this.count_investor,
    }
    console.log(market_infos)
  }
}
let market2 = new MyMart("Markett", "Anggun", "self-store", "jambi", 2);
market2.info();

//PROTOTYPES
MyMart.prototype.store_status = "active";
console.log(market2.store_status);

MyMart.prototype.store_status = "non active";
console.log(market2.store_status);

MyMart.prototype.check_status = function () {
  console.log("current mart ", this.market_name, " status : active");
};
market2.check_status();