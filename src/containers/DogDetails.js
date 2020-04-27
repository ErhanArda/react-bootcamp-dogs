import React from 'react'
import dogs from '../dogsdata'

const DogDetails = (props) => {
    const selectedDog = props.match.params.writtenDog;
    const showDogs = dogs.filter((dog) => dog.name === selectedDog)
    return (
        <div>
            <h1>selectedDog: {selectedDog}</h1>
            <ul>
                {
                    showDogs.map((dog) => {
                        return <li>{dog.description
                        }
                            <li>
                                {dog.age}
                            </li>
                            <li>
                                {dog.breed}
                            </li>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default DogDetails
