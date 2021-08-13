const App = () => {
  const date = new Date(Date.now());
  return (
    <div>
      <Person
        age={32}
        name="Captain"
        hobbies={["shield throwing", "capturing bad guys"]}
      />
      <Person
        age={16}
        name="Sonic"
        hobbies={["running fast", "turning into a ball"]}
      />
    </div>
  );
};
