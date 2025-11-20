import { useState } from "react";

export default function Sample() {
    // var username = "Ali";
    var [username, setUsername] = useState("Ali");

    const handleUsername = () => {
        // username = "Omar";
        setUsername("Omar")
        console.log(username)
    }

    return (
        <div>
            <div>{username}</div>
            <button onClick={handleUsername}>Click me</button>
        </div>
    )
}
