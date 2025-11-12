
export default function Rendering() {
    var persons = [
        { name: "Mohamed", age: 30 },
        { name: "Gharam", age: 25 },
        { name: "Esraa", age: 28 },
    ];
    return (
        <div>
            <h2>Rendering</h2>
            <ul>
                {persons.map((person, i) => (
                    <li key={i}>{person.name} - {person.age}</li>
                ))}
            </ul>
        </div>
    )
}
