import { useState } from 'react';
import { sculptureList } from '../data/data';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        // index < sculptureList.length - 1 ? setIndex(index + 1) : setIndex(0)
        index < sculptureList.length - 1 && setIndex(index + 1)
    }
    function handlePreviousClick() {
        index > 0 && setIndex(index - 1)
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handlePreviousClick} className="bg-gray-200 px-4 py-2 m-2">
                Previous
            </button>
            <button onClick={handleNextClick} disabled={index === sculptureList.length - 1} className="bg-gray-200 px-4 py-2 m-2 disabled:bg-gray-900 disabled:text-white">
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
