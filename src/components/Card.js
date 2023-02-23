import React from 'react';

const Card = ({name, email, id}) => { // we receive the id, name and email props
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> {/* from tachyons */}
            <img alt='robots' src={`https://robohash.org/${id}}?200x200`}/> {/* robohash is a website that returns a random robot based on a text*/}
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;