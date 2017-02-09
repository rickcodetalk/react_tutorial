import dispatcher from './person_dispatcher'

export function addPerson(person) {

    dispatcher.dispatch({

        type:'ADD',
        person: person
    })
}

export function deletePerson(person) {

    dispatcher.dispatch({

        type:'DELETE',
        person: person
    })
}