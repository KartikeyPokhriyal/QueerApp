import React, {Component} from 'react';
import './css/factcard.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {display} from './Actions/AddTodo';
import {counter} from './Actions/Count'
import {score} from './Actions/Score'
import reject from './css/reject.png'
import accept from './css/accept.png'
import Button from "reactstrap/es/Button";
import Queer from "./queer";
import baba2 from './css/baba2.jpeg'

export class Instructions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queer: false
        }
    }


    render() {
        return (
            <div>
                {this.state.queer ? <Queer/> :
                    <div>
                        <div className="card small">
                   <span className="two_things">
                    <div className="talk-bubble tri-right round right-in">
                        <div className="talktext">
                            <p>Go back to home page</p>
                        </div>
                    </div>
                    <a href="/QueerApp"><h1 className="heading_home instruction_heading">LGBTQuiz</h1>
                    <p className="app-overview">App Overview</p>
                    </a>
                   </span>
                            <div className="desc ins">
                                <img src={baba2} height="176px"/>
                                <div className="statement">
                                    <p>Example:The L in LGBTQ+ stand for Lesbian</p>
                                </div>
                                <Button className="home_button" onClick={() => {
                                    this.setState({queer: true})
                                }}>Let's play!</Button>
                            </div>
                        </div>
                        <div className="card help">
                            <div className="talk-bubble tri-right round left-in">
                                <div className="talktext">
                                    <p>Image related to the statement</p>
                                </div>
                            </div>
                            <div className="talk-bubble tri-right round left-in">
                                <div className="talktext">
                                    <p>A statement which can be a fact/myth around/about LGBTQ+ community</p>
                                </div>
                            </div>
                        </div>
                        <div className="some another">
                    <span className="two_things three">
                    <div className="talk-bubble tri-right round right-in">
                    <div className="talktext">
                    <p>If you think the statement is right click here</p>
                    </div>
                    </div>
                    <img className="factright__icon unclickable" width="88px" height="81px" src={accept}/>
                    <img className="factwrong__icon unclickable" src={reject} height="80px"/>
                    <div className="talk-bubble tri-right round left-in">
                    <div className="talktext">
                    <p>If you think the statement is wrong click here</p>
                    </div>
                    </div>
                    </span>
                        </div>
                    </div>
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        addItem: state.addItem,
        countItem: state.countItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        display_val: bindActionCreators(display, dispatch),
        count_them: bindActionCreators(counter, dispatch),
        score_them: bindActionCreators(score, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
