const carlos = {
    name: 'Carlos',
    lastName: 'Brignardello',
    age: 28
}

const birthday = person => person.age++ // Esta función esta modificando permanentemente datos.
const birthdayInmutable = person => ({
    ...person,
    age: person.age + 1
})