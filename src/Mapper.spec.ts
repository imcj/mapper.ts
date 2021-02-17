import Mapper from './Mapper';

test('test', () => {
    const mapper = new Mapper();
    const people = mapper.from<Person>(peopleJson, Person);
    console.log(people);
});

class Person {

    id: Number = 0;

    firstName: string = '';

    lastName: string = '';

    friends: Person[] = [];
}

const peopleJson = [
    {
        id: 1,
        first_name: "Congju",
        last_name: "wei",
        friends: [
            {
                id: 2,
                first_name: "Xiaoling",
                last_name: "Ceng"
            }
        ]
    }
]