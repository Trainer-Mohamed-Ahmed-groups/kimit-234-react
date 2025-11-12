import { getImageUrl } from "../utils/formatImageSrc";

export default function Scientist({ scientist }) {
    return (
        <section className="profile">
            <h2>{scientist.name}</h2>
            <img
                className="avatar"
                src={getImageUrl(scientist.imageId)}
                alt={scientist.name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {scientist.profession}
                </li>
                <li>
                    <b>Awards: {scientist.awards.length} </b>
                    ({scientist.awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {scientist.discovered}
                </li>
            </ul>
        </section>
    )
}
