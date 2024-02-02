const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const chemists = people.filter(person => person.profession === 'chemist');
const astrophysicist = people.filter(person => person.profession === 'astrophysicist');

const listItems = chemists.map(person =>
  <li key={person.id}>
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession + ' '}
      {person.accomplishment} です。
    </p>
  </li>
);

const listItems2 = astrophysicist.map(person =>
  <li key={person.id}>
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession + ' '}
      {person.accomplishment} です。
    </p>
  </li>
);


export default function List() {
  return (
    <section>
      <h1>People</h1>
      <ul>{listItems}</ul>
      <ul>{listItems2}</ul>
    </section>
  );
}
