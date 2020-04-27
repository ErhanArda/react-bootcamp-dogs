import React from 'react'
import { Button } from 'reactstrap'

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button color="danger"
                        onClick={() => { props.toggle(props.id) }}>
                        Remove Favorite
                        </Button>
                    : <Button color="primary"
                        onClick={() => { props.toggle(props.id) }}>
                        Add Favorite
                        </Button>
            }
        </div>
    )
}

export default FavoriteActions
