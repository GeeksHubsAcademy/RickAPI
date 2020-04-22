import React, { Component } from 'react';
import Header from '../components/Header'

import Wrapper from '../containers/Wrapper';
import characterServices from '../services/characterServices';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();

        this.state = {
            pnjs: []
        }
    }

    componentDidMount() {
        characterServices.getByPage(1)
            .then( api => {
                console.log(api);
                this.setState({pnjs: api.data.results})
            })
            .catch( err => console.err(err) );
    }


    render(){
        return (
            <Wrapper condition={this.state.pnjs.length < 0}>
                <Header />
                {
                    this.state.pnjs.map( pnj => {
                        return <div key={pnj.id}> 
                            <Link 
                                to={`/personaje/${pnj.id}`}> 
                                {pnj.name} 
                            </Link>
                        </div>
                    })
                }
            </Wrapper>
        )
    }
}

export default Home;