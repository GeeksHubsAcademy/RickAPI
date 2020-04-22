import React, { Component, Fragment } from 'react';

import Loading from '../components/Loading';

export default class Wrapper extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return (
            <Fragment>
                {
                    (this.props.condition)
                    ?  <Loading />
                    : this.props.children
                }
            </Fragment>
        )
    }
}