export default function PhoneList({ filterContacts }) {
  return (
    <ul>
      {filterContacts.map(el => (
        <li key={el.number}>
          {el.name}:{el.number}
        </li>
      ))}
    </ul>
  );
}
