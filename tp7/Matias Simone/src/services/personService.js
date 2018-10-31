export default {
  getAll() {

    return JSON.parse(localStorage.getItem("people")) || [];
  },

  getOne(id) {
    return new Promise((res, rej) => {
      try {
        const persons = this.getAll();

        setTimeout(() => {
          res(persons.find(person => person.id === id));
        }, 2000);
      } catch (e) {
        rej(e.toString());
      }
    });
  },

  saveAll(persons) {
    localStorage.setItem("people", JSON.stringify(persons));
  },

  change(newPerson) {

    let people = this.getAll();
    
    let toChange = people.find(persona => persona.id === newPerson.id);
    let idx = people.indexOf(toChange);
    people[idx] = newPerson;

    this.saveAll(people);
  },

  save(nombre, apellido, sexo, edad) {

    let persons = this.getAll();
    let idx = 0;
    for (let person of persons) {
      idx = person.id ++;
    }
    let people = {
      id: idx,
      nombre: nombre,
      apellido: apellido,
      sexo: sexo,
      edad: edad
    } 
    persons.push(people);
    this.saveAll(persons)
  }
}