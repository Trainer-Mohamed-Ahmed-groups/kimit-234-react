import Scientist from "../components/Scientist";
import { scientists } from "../data/scientist";

export default function Gallery() {

    return (
        <div>
            <h1>Notable Scientists</h1>
            <Scientist scientist={scientists[0]} />
            <Scientist scientist={scientists[1]} />
        </div>
    );
}
