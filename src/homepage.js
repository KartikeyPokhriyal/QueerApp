import React, { Component } from 'react';
import './css/factcard.css';
import './css/header.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {display} from './Actions/AddTodo';
import {counter} from './Actions/Count'

import {Button} from 'reactstrap'

import reject from './css/reject.png'
import accept from './css/accept.png'
import Queer from "./queer";
import Header from "./header";

export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queer:false
        }

    }


    render() {
        console.log(this.props)
        return (
            <div>
            {this.state.queer ? <Queer/> : <div>
                <Header/>
                <div className="card_home" >
                   <h1>Instructions</h1>
                     <div className="displayIns">
                       <h3 className="home_header">If you think it's true click</h3>
                    <img src={accept} width="30px" height="30px"/>
                     </div>
                    <div className="displayIns">
                        <h3 className="home_header">If you think it's false click</h3>
                    <img src={reject} width="30px" height="30px"/>
                    </div>

                   <Button className="home_button" onClick={() => {this.setState({queer:<Queer/>})}}>Start</Button>
                </div>
            </div>}
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        addItem:state.addItem,
        countItem: state.countItem
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        display_val: bindActionCreators(display, dispatch),
        count_them: bindActionCreators(counter, dispatch),

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
