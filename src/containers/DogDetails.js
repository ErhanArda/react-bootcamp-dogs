import React from 'react'
import dogs from '../dogsdata'

const DogDetails = (props) => {
    const selectedDog = props.match.params.writtenDogId;
    const showDogs = dogs.find((dog) => dog.id === selectedDog)

    return (
        <div>
            <li>
                <h1> selectedDog:  {showDogs.name}</h1>
                <ul>
                    <li>{showDogs.description}
                        <li>
                            {showDogs.age}
                        </li>
                        <li>
                            {showDogs.breed}
                        </li>
                    </li>
                </ul>
            </li>
        </div>
    )
}

export default DogDetails

// const DogDetails = (props) => {
//     const selectedDog = props.match.params.writtenDog;
//     const showDogs = dogs.filter((dog) => dog.id === selectedDog)

//     return (
//         <div>
//             <li>
//                 selectedDog: {showDogs.map((dog) => {
//                 return <h1> {dog.name}</h1>
//             })
//                 }</li>
//             {/*
//                 dogs.map((dog) => { if(selectedDog === dog.id){
//                     return dog.name 
//                 }}
//                 )
//            */}
//             <ul>
//                 {
//                     showDogs.map((dog) => {
//                         return <li>{dog.description}
//                             <li>
//                                 {dog.age}
//                             </li>
//                             <li>
//                                 {dog.breed}
//                             </li>
//                         </li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default DogDetails
