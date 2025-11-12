// export default function Card(props) {
//     console.log(props)
//     return (
//         <>
//             <div>Hello {props.username}</div>
//             {props.gender}
//             <hr />
//         </>
//     )
// }


export default function Card({ username, gender, children }) {
    return (
        <>
            <div>Hello {username}</div>
            {children}
            {gender}
            <hr />
        </>
    )
}
