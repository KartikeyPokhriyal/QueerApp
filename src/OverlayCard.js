import React, { Component } from 'react';
import './css/factcard.css';
import './css/overlay-card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {bindActionCreators} from "redux";
import {counter} from "./Actions/Count";
import {connect} from "react-redux";
import {display} from "./Actions/AddTodo"
import {score} from './Actions/Score'
import {Button} from 'reactstrap'
import Scorecard from "./scorecard";
import tried from './css/try.gif'
import mariah from './css/mariah.gif'
import sasha from './css/sasha.gif'

library.add(faWindowClose);

export class OverlayCard extends Component {
    constructor(props) {
        super(props);
        this.calculate = this.calculate.bind(this);
    }

    calculate() {
        let img;
        let text;
        if(this.props.countItem.count === 15) {
            if(this.props.scoreItem.score <= 3 )
            { img = tried;
                text = "We all are learning, so chill!"}
            if(this.props.scoreItem.score > 3 || this.props.scoreItem.score < 10)
            {img = mariah;
               text = "That was lovely! You'll make a great ally!"}
            if(this.props.scoreItem.score >= 10)
            {  img = sasha
                text = "You're amazing!!!!!!" }

            this.props.display_val(<Scorecard/>)
            setTimeout(()=>{this.props.display_val(<OverlayCard text={"Your score is:" +  this.props.scoreItem.score + "/" + 15 + "\n" + text} img={img} scores={0} displayScore={true}/>)}, 3000)
        }
    }


    render() {

        return (
                     <div className="something">
                        <div className="overlay">
                            <div className="content">
                                <img src={this.props.img} height="217px"/>
                            </div>
                                <div className="content_two">
                                <span className="overlay__text">{this.props.text}</span>
                                    <span className="span_overlay">
                                   {this.props.displayScore ? <Button className="home_button_overlay"  href="/QueerApp">Play again!</Button> : <Button className="overlay__icon" onClick={()  => {this.props.display_val(null); this.calculate()}}>Next card</Button>}
                                    </span>
                                </div>
                            </div>
                     </div>
        );
    }

}

function mapStateToProps(state)
{
    return {
        countItem: state.countItem,
        scoreItem:state.scoreItem
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        count_them: bindActionCreators(counter, dispatch),
        display_val: bindActionCreators(display, dispatch),
        score_val: bindActionCreators(score, dispatch),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayCard);
