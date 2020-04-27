import React, { Component } from 'react'
import dogs from '../dogsdata';
import Dog from '../components/Dog'
import axios from 'axios'

const apiHost = "https://5ea56a222d86f00016b45ccd.mockapi.io"
class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favorites: []
        }
    }

    componentDidMount(){
        this.setState({
            favorites:window.localStorage.getItem("favorites")?
            JSON.parse(window.localStorage.getItem("favorites")): []
        })

        axios.get(`${apiHost}/favorites`).then((result)=>{
            console.log("Axios Result", result); 
        }).catch((err)=>{
            console.log("Axios err",err)
        })
    }





    toggle = (dogId) => {
        const foundDog = this.state.favorites.find((favorite) => favorite === dogId)
        if (foundDog) {
            this.setState({
                favorites: this.state.favorites.filter((dog) => dog !== dogId)
            },()=>{
                window.localStorage.setItem("favorites",JSON.stringify(this.state.favorites));
            })
        } else {
            this.setState({
                favorites: [...this.state.favorites, dogId]
            },()=>{
                window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));

            })
        }
    }

    getStatus = (dogId) => {
        const foundDog = this.state.favorites.find((favorite) => favorite === dogId)
        return foundDog
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        dogs.map((dog) => {
                            return <Dog id={dog.id} toggle={this.toggle} getStatus={this.getStatus} {...dog}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HomePage
