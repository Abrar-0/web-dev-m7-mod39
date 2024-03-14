export default function User({user}){

    const sty = {
        borderRadius: '10px',
        border: '1px solid aqua',
        padding: '10px',
        margin:'20px'

    }
    return (
        <div style={sty}>
            <h3>Name: {user.name}</h3>
            <p>Email:{user.email}</p>
            <h3>Username: {user.username}</h3>
            <h4>Address: {user.address.street}</h4>
            <h4>Latitude:{user.address.geo.lat} </h4>
        </div>
    )
}
