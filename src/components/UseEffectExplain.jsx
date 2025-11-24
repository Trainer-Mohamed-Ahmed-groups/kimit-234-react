import { useEffect, useState } from "react"

export default function UseEffectExplain() {

    const [username, setUsername] = useState("Ali")

    useEffect(() => {
        console.log("Rendered")
    }, [])

    useEffect(() => {
        if (username === 'Ali') return;
        console.log("Username edited")
    }, [username])

    useEffect(() => {
        return () => {
            console.log("Removed")
        }
    }, [])

    return (
        <div>
            <h2>UseEffectExplain</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border" />
            <h3>{username}</h3>
        </div>
    )
}
