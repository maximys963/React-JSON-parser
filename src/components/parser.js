import React, {Component} from 'react';
import { FETCH_REQUEST } from '.././actions/actions'
import { store }from '../App'
import { connect } from 'react-redux'




class Parser extends Component {
    render() {
        let parsedData = this.props.parstingState.data;
        return (
            <div>
                { parsedData === null
                  ? (<div>wait...</div>)
                  :  parsedData.map( element => (
                    <div key = {element.id}>
                    <h4>{`name: ${element.name} surname: ${element.surname}`}</h4>
                    <p>{`${element.desc}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}



export default connect(

    state => ({
        parstingState: state
    }),

)(Parser)
