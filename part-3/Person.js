const Person = ({ name, age, hobbies }) => {
  return (
    <div>
      <h2>{name.slice(0, 6)}</h2>
      <p>Learn some information about this person</p>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
