export default function Button() {
    var sayHello = function (name) {
        console.log('Hello ' + name);
    }

    return (
        <button onClick={() => sayHello("Mohamed")} className="bg-gray-200 p-2 m-2">
            Click me
        </button>
    );
}
