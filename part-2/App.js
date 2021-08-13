const App = () => {
    const date = new Date(Date.now());
    return (
    <div>
        <Tweet username="megaman" name="Megaman" date={date.toDateString()} message="I'm mega"/>
        <Tweet username="sonicthehedgehog" name="Sonic" date={date.toDateString()} message="I'm super fast"/>
    </div>
)}