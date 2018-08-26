import React, {Component} from 'react';
import { FETCH_REQUEST } from '.././actions/actions'
import { store }from '../App'
import { Pagination } from 'react-bootstrap'
import { connect } from 'react-redux'
import { PAGE_CLICK } from '.././actions/actions'

let active = 0;
let items = [];



for(let number = 1; number <= 4; number++){
    items.push(
        <Pagination.Item page={number} active={number === active} key={10+number} >{number}</Pagination.Item>
    )
}
const pars_container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '250px'
};
const main_container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

class Parser extends Component {
    MakeSomething(event) {
        this.props.onClick(event.target.innerText - 1)
    }

    render() {
        let parsedData = this.props.parstingState.data;
        return (
            <div style={main_container}>
                { parsedData === null
                  ? (<div>wait...</div>)
                  : parsedData.slice(this.props.parstingState.pageNumber * 5,this.props.parstingState.pageNumber * 5 + 5).map( element => (
                    <div className="pars-container" style={pars_container} key = {element.id}>
                    <img src={`http://dev.frevend.com/json/images/u_${element.id}.png`}/>
                    <h4>{`name: ${element.name} surname: ${element.surname}`}</h4>
                    <p>{`${element.desc}`}</p>
                    </div>
                ))}
                <Pagination page={items} bsSize="medium" onClick={this.MakeSomething.bind(this)}>{items}</Pagination>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onClick: (page) =>{
    dispatch({
        type: PAGE_CLICK,
        payload: page,
    })

}
});

export default connect(
    state => ({
        parstingState: state
    }),
    mapDispatchToProps,
)(Parser)
