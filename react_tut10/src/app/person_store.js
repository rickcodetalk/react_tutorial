import EventEmmitter from "events"
import dispatcher from './person_dispatcher'

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

        this.people.push({name:name, age:age})
        this.emit("change")
    }

    handleActions(action) {

        console.log("received an action :", action)

        switch(action.type) {

            case 'ADD':
                this.addPerson(action.person.name, action.person.age)
        }
    }
}

const personStore = new PersonStore
dispatcher.register(personStore.handleActions.bind(personStore))


export default personStore
window.personStore = personStore