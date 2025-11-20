import { useState } from "react";
export default function Clock({ time }) {
    const hours = time.getHours();
    let [className, setClassName] = useState('');
    if (hours >= 0 && hours <= 6) {
        document.getElementById('time').className = 'night';
    } else {
        document.getElementById('time').className = 'day';
    }
    return (
        <h1 id="time">
            {time.toLocaleTimeString()}
        </h1>
    );
}
