import React from 'react';
import Card from './Card';

const CardList = ({robots}) => { // passing in robots prop (destructuring, we can just pass in props without the curly brackets)

    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={robots[i].id} // We have to add a key prop so react can do something like garbage collection in the DOM for the exact card, and not all cards at once
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    /> 
                    );
                })
            }

        </div>
    )
}

export default CardList;