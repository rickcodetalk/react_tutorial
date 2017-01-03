import EventEmmitter from "events"

class PersonStore extends EventEmmitter {

    constructor() {

        super()

        this.people = [
            { name: "Rick Lee", age: 19 },
            { name: "Mary Cheung", age: 44 },
            { name: "Ann Chu", age: 33 }
        ]
    }

    getPeople() {

        return this.people;
    }

    addPerson(name, age) {

        this.people.push({name:name, age:name})
        this.emit("change")
    }
}

const personStore = new PersonStore
export default personStore
window.personStore = personStore