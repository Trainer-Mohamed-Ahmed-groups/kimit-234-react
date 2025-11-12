
export default function Conditional() {

    var myNumber = 3;
    var username = "Ali"

    return (
        <div>
            <h2>Conditional</h2>
            {
                myNumber > 5
                    ? <h3>Your number is more than 5</h3>
                    : <h4>Your number is less than 5</h4>
            }
            {username === 'Ali' && <h5>Hello Ali</h5>}

            {
                5 > 4
                    ? "OK"
                    : 5 === 5
                        ? "Equal"
                        : "Not OK"
            }
        </div>
    )
}
