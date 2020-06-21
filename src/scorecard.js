import React, {Component} from 'react';
import './css/factcard.css';
import './css/overlay-card.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {bindActionCreators} from "redux";
import {counter} from "./Actions/Count";
import {connect} from "react-redux";
import {display} from "./Actions/AddTodo"
import {score} from './Actions/Score'
import america from './css/america.gif'

library.add(faWindowClose);

export class Scorecard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="something">
                <div className="overlay">
                    <div className="content">
                        <img src={america} height="217px"/>
                    </div>
                    <div className="content_two">
                        <span className="overlay__text">Calculating your score.....</span>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        countItem: state.countItem,
        scoreItem: state.scoreItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        count_them: bindActionCreators(counter, dispatch),
        display_val: bindActionCreators(display, dispatch),
        score_val: bindActionCreators(score, dispatch),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Scorecard);
