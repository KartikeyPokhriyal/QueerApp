import React, {Component} from 'react';
import './css/factcard.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import stonewall from './stoner.svg'
import {counter} from './Actions/Count'
import {cardDisplay} from './Actions/DisplayCard'
import correct from './css/correct.gif'
import wrong from './css/wrong.gif'
import FactCard from "./FactCard";
import california from './css/california.jpg'
import ellen from './css/ellen.jpeg'
import wedding from './css/wedding.jpg'
import section from './css/377.jpg'
import bi from './css/bi.jpg'
import therapist from './css/therapist.jpg'
import pronoun from './css/pronouns.jpg'
import gaymen from './css/gaymen.jpg'
import madonna from './css/madonna.jpg'
import trans from './css/trans.png'
import flag from './css/flag.png'
import non from './css/non.png'
import Header from './header'
import babur from './css/babur.jpg'
import sexuality from './css/sexuality.jpg'

export class Queer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = [
            {
                'fact': 'Stonewall was started by gay men',
                'factImg': stonewall,
                'factRight': 'It was actually led by trans women of colour',
                'factWrong': 'Yes! It was actually led by trans women of colour',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            }
        ];

        let data2 = [data[0]]

        data2.map((element, i) =>

            this.props.display_card(<FactCard factImg={element.factImg} fact={element.fact}
                                              factRightImg={element.factRightImg}
                                              factWrongImg={element.factWrongImg} factWrong={element.factWrong}
                                              factRight={element.factRight} rightScore={element.rightScore}
                                              wrongScore={element.wrongScore}/>));

    }

    componentDidUpdate(prevProps) {

        const data = [
            {
                'fact': 'Stonewall was started by gay men',
                'factImg': stonewall,
                'factRight': 'It was actually led by trans women of colour',
                'factWrong': 'Yes! It was not led by gay men',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'California becomes the first state to decriminalize homosexuality',
                'factImg': california,
                'factRight': 'It was actually Illinois in 1961!',
                'factWrong': 'Yes!! It was actually at Illinois in 1961!',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Ellen Degeneres came out on National Television!',
                'factImg': ellen,
                'factRight': 'Yes!! She did that',
                'factWrong': 'Yes!! She did that',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'The first legal same-sex marriage in the United States takes place in Massachusetts.',
                'factImg': wedding,
                'factRight': 'The first legal same-sex marriage ceremony in the United States happened on February 12, 2004',
                'factWrong': 'The first legal same-sex marriage ceremony in the United States happened on February 12, 2004',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'Our First Mughal Emperor Was Not Straight',
                'factImg': babur,
                'factRight': 'Yes! Babur’s infatuation with a teenage boy named Baburi has even been documented in his memoirs',
                'factWrong': 'It is true.Babur’s infatuation with a teenage boy named Baburi has even been documented in his memoirs',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': '377 was decriminalised on 6th sept 2018',
                'factImg': section,
                'factRight': 'On September 6, 2018, a historic judgment was made by the Supreme Court of India which decriminalized Section 377 of Indian Penal Code.',
                'factWrong': 'It is true that On September 6, 2018, a historic judgment was made by the Supreme Court of India which decriminalized Section 377 of Indian Penal Code. ',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'People who are bisexual are 50% gay and 50% straight.',
                'factImg': bi,
                'factRight': 'Gender is fluid! Like all other kinds of love there is no math involved',
                'factWrong': 'Correct.Gender is fluid! Like all other kinds of love there is no math involved',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Sexuality and gender are the same',
                'factImg': sexuality,
                'factRight': 'Sexuality is your emotional and physical attraction to someone, whereas gender is more about self expression',
                'factWrong': 'Sexuality is your emotional and physical attraction to someone, whereas gender is more about self expression',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Gay conversion therapy is a viable way of becoming straight.',
                'factImg': therapist,
                'factRight': 'It\'s false.Love and accept the way people are.',
                'factWrong': 'YES!!!!! Love and accept the way people are.',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Individuals who are gender non-conforming have to go by they/them pronouns',
                'factImg': pronoun,
                'factRight': 'True! Let\'s be more inclusive',
                'factWrong': 'It is true. Let\'s be more inclusive',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'Gay men are feminine',
                'factImg': gaymen,
                'factRight': 'Gender is an expression, everyone is beautiful in their own way',
                'factWrong': 'I know right! Gender is an expression, everyone is beautiful in their own way',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'The song most commonly identified as a gay anthem is ‘Vogue’ by Madonna',
                'factImg': madonna,
                'factRight': 'It was actually ‘I Will Survive’ by Gloria Gaynor. It was described as "a classic emblem of gay culture in the post-Stonewall and AIDS eras and arguably disco’s greatest anthem.',
                'factWrong': 'Correct! It was ‘I Will Survive’ by Gloria Gaynor. It was described as "a classic emblem of gay culture in the post-Stonewall and AIDS eras and arguably disco’s greatest anthem.',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Sweden was first country in the world to allow transgender people to legally change their sex',
                'factImg': trans,
                'factRight': 'Yes! In 1972, Sweden became the first country in the world to allow transgender people to legally change their sex',
                'factWrong': 'Actually in 1972, Sweden became the first country in the world to allow transgender people to legally change their sex',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'The A in LGBTQIA, only stands for asexual?',
                'factImg': flag,
                'factRight': 'You\'re absolutely correct!',
                'factWrong': 'A actually stands for asexual!',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'Non-binary gender means having qualities of both male and female genders',
                'factImg': non,
                'factRight': 'Non-binary gender is actually an umbrella term to describe any gender identity that does not fit into the gender binary of male and female',
                'factWrong': 'Right! Non-binary gender is an umbrella term to describe any gender identity that does not fit into the gender binary of male and female',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'The Q in LGBTQ stand for Queer',
                'factImg': flag,
                'factRight': 'It actually stands for Questioning!',
                'factWrong': 'Yes! It stands for Questioning!',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            }
        ];

        if (prevProps.countItem.count !== this.props.countItem.count && data.length > this.props.countItem.count) {
            let data2 = [data[this.props.countItem.count]]
            console.log(data2, "actual")
            data2.map((element, i) =>

                this.props.display_card(<FactCard factImg={element.factImg} fact={element.fact}
                                                  factRightImg={element.factRightImg}
                                                  factWrongImg={element.factWrongImg} factWrong={element.factWrong}
                                                  factRight={element.factRight} rightScore={element.rightScore}
                                                  wrongScore={element.wrongScore}/>));

        }
    }


    render() {

        return (
            <div>
                <Header/>
                {this.props.addItem.displayit}
                {this.props.displayItem.comp}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        addItem: state.addItem,
        displayItem: state.displayItem,
        countItem: state.countItem,
        scoreItem: state.scoreItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        display_card: bindActionCreators(cardDisplay, dispatch),
        count_it: bindActionCreators(counter, dispatch)

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Queer);
