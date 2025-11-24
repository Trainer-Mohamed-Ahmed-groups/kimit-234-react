import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Gallery from '../components/Gallery'
import UseEffectExplain from '../components/UseEffectExplain'

export default function Home() {
    const [show, setShow] = useState(true)

    return (
        <div>
            <Gallery />
            <hr />
            <Button variant='primary' onClick={() => setShow(!show)}>Show</Button>
            {show && <UseEffectExplain />}
        </div>
    )
}
