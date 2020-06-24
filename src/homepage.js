import React, {Component} from 'react';
import './css/factcard.css';
import './css/header.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {display} from './Actions/AddTodo';
import {counter} from './Actions/Count'

import {Button} from 'reactstrap'
import Instructions from "./instructions";
import baba from './css/baba.jpg'

export class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queer: false
        }

    }


    render() {
        console.log(this.props)
        return (
            <div>

                {this.state.queer ? <Instructions/> : <div>

                    <div className="main_page">
                        <div className="card_home">
                            <a href="/QueerApp"><h1 className="home_heading">LGBTQuiz</h1></a>

                            <div className="talk-bubble tri-right round btm-left">
                                <div className="talktext">
                                    <p>Are you ready to Demistify facts around LGBTQ community?</p>
                                </div>
                            </div>
                            <img src={baba} height="187px"/>

                            <Button className="home_button" onClick={() => {
                                this.setState({queer: true})
                            }}>Let's Begin</Button>

                        </div>


                        <div className="some_home">
                        </div>
                        <div className="card_home_one">

                            <div className="talk-bubble-another tri-right round btm-left">
                                <div className="talktext">
                                    <p>"Isn't gender and sex the same thing?"</p>
                                </div>
                            </div>
                            <div className="talk-bubble-another tri-right round btm-left">
                                <div className="talktext">
                                    <p>"What does the + mean in LGBTQ+?"</p>
                                </div>
                            </div>

                        </div>
                        <div className="card_home_two">

                            <div className="talk-bubble-another tri-right round btm-left">
                                <div className="talktext">
                                    <p>"What pronoun should I use to address Robert?"</p>
                                </div>
                            </div>

                            <div className="talk-bubble-another tri-right round btm-left">
                                <div className="talktext">
                                    <p>"Is my gender my sexuality?"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
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

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
