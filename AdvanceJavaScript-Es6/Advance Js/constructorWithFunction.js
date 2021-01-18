function Person(first, last, age, gender, interests) {
    this.name = {
       first : first,
       last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. she likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.');
    };
  }
  let person1 = new Person('Aruna', 'Jyothi', 21, 'female', ['music', 'Yoga']);
  console.log(person1['gender']);
  console.log(person1.interests[1]);
  person1.bio()
  person1.greeting();