import React from 'react'
import FavoriteActions from '../components/FavoriteActions'
import { Link } from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';




const Dog = ({ id, name, image, description, toggle, getStatus, disabledButton, disabledFavoriteFeature }) => {
    return (
        <div key={id} style={{margin:"15px"}}>

            <Card>
                <CardImg top width="100%" src={image} alt={name} className="dog-image"/>
                <CardBody>
                    <CardTitle>
                        <span>
                            {name}
                        </span>
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <Button color="primary" className="a">
                        <Link to={`/details/${id}`}>
                            Details
                            </Link>
                    </Button>
                    {
                        !disabledFavoriteFeature && <FavoriteActions toggle={toggle} id={id} getStatus={getStatus} disabledButton={disabledButton}/>
                    }

                </CardBody>
            </Card>
        </div>
    )
}

export default Dog
