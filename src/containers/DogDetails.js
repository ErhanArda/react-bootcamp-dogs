import React from 'react'
import dogs from '../dogsdata'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import "./styles.css";

const DogDetails = (props) => {
    const selectedDog = props.match.params.writtenDogId;
    const showDogs = dogs.find((dog) => dog.id === selectedDog)

    return (
        <div>
            <Card className="card">
                    <CardImg width="100%" src={showDogs.image} alt="Card image cap" />
                    <CardBody >
                        <CardTitle>
                            <h3>{showDogs.name}</h3>
                        </CardTitle>
                        <CardSubtitle>{showDogs.age}</CardSubtitle>
                        <CardText>{showDogs.description}</CardText>
                    </CardBody>
                </Card>
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
