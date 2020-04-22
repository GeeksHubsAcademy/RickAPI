import React, { Component, Fragment } from 'react';

import characterServices from '../services/characterServices';

import Wrapper from '../containers/Wrapper';
import Personaje from '../components/Personaje';

class Detalles extends Component {
    constructor(props){
        super(props);

        this.state = {
            pnj: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        characterServices.getById(id)
            .then( api => {
                console.log(api.data);
                this.setState({pnj: api.data});
            })
    }

    render(){
        const { pnj } = this.state;
        return (
            <Wrapper 
                condition={this.state.pnj.name === undefined}>
                <Personaje pnj={pnj} />
            </Wrapper>
        )
    }
   
}


export default Detalles;