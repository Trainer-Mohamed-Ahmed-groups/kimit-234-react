import Sample from "../components/Section";
import User from "../components/User";
export default function About() {
    return (
        <div>
            <h2 style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>About</h2>
            <User />
            <User />
            <User />
            <hr />
            <section>This is</section>
            <Sample />
        </div>
    )
}
