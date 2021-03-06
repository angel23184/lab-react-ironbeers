import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BeerDetails extends Component {
    constructor (props){
        super(props);
        this.state = {};
    }



    componentDidMount(){
        this.getSingleProject();
    }

    getSingleProject = () => {
        const { params } = this.props.match;
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
        .then( responseFromApi =>{
            const theBeer = responseFromApi.data;
            this.setState(theBeer);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.tagline}</p>
        <img src={`${this.state.image_url}`} style ={{width: "10%"}} alt=""/>
        <p>{this.state.contributed_by}</p>
      </div>

    )
  }
}
