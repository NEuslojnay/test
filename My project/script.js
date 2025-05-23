// Personla nomli JS class oching
// ichida Name,Surname, Age, Job propertielari bolsin

class Personla {
  constructor(Name,Surname,Age,Job,) 
  
  { this.name = Name;
    this.Surname = Surname;
    this.Age = Age;
    this.Job = Job;
   }
}
class Student {
  constructor(Name,Surname,Age,Job,) 
  
  { 
    this.name.Student = Personla.Name ;
    this.name.Student = Personla.Surname ;
    this.name.Student = Personla.Age ;
    this.name.Student = Personla.Job ;
    }
    increaseAge() {
    this.age += 1;
  }
}

const student1 = new Student("Ali", "Valiyev", 20, "Student");

student1.increaseAge();

console.log("После увеличения", student1.age);

