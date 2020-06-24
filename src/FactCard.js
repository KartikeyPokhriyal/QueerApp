import React, {Component} from 'react';
import './css/factcard.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {display} from './Actions/AddTodo';
import {counter} from './Actions/Count'
import {score} from './Actions/Score'
import OverlayCard from "./OverlayCard";
import reject from './css/reject.png'
import accept from './css/accept.png'

export class FactCard extends Component {
    constructor(props) {
        super(props);
        this.calculate = this.calculate.bind(this);
    }

    calculate(scores) {
        if (scores === 1) {
            this.props.score_them();
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="scoreMe"><h2>SCORE:({this.props.scoreItem.score}/15)</h2></div>
                <div className="card">

                    <a href="/QueerApp"><h1 className="heading_home">LGBTQuiz</h1></a>
                    <div className="desc">
                        <img src={this.props.factImg} className="image" height="165px" width="212px"/>
                                <div className="statement">
                                    <p>{this.props.fact}</p>
                                </div>
                    </div>
                </div>
                <div className="some">
                    <img className="factright__icon" width="88px" height="81px" src={accept} onClick={() => {
                        this.props.display_val(<OverlayCard img={this.props.factRightImg} text={this.props.factRight}
                                                            scores={this.props.rightScore} displayScore={false}/>);
                        this.props.count_them();
                        this.calculate(this.props.rightScore)
                    }}/>

                    <img className="factwrong__icon" src={reject} height="80px" onClick={() => {
                        this.props.display_val(<OverlayCard img={this.props.factWrongImg} text={this.props.factWrong}
                                                            scores={this.props.wrongScore} displayScore={false}/>);
                        this.props.count_them();
                        this.calculate(this.props.wrongScore);
                    }}/>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        addItem: state.addItem,
        countItem: state.countItem,
        scoreItem:state.scoreItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        display_val: bindActionCreators(display, dispatch),
        count_them: bindActionCreators(counter, dispatch),
        score_them: bindActionCreators(score, dispatch)
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(FactCard);
