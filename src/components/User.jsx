const User = () => {
    var username = "Mohamed"
    function handleUser() {
        console.log("Hello")
    }


    return (
        <div>
            <h3>This is user</h3>
            {username}
            <button onClick={handleUser}>Click me</button>
        </div>
    );
}

export default User;

// export default function User() {
//     return (
//         <div>User</div>
//     )
// }
