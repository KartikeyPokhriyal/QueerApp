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
import section from './css/377.jpg'
import pronoun from './css/pronouns.jpg'
import gaymen from './css/gaymen.jpg'
import madonna from './css/madonna.jpg'
import trans from './css/trans.png'
import flag from './css/flag.png'
import non from './css/non.png'
import babur from './css/babur.jpg'
import intersex from './css/intersex.png'
import sexgender from './css/sexgender.jpg'

export class Queer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = [
            {
                'fact': 'The Q in LGBTQ stand for Queer',
                'factImg': flag,
                'factRight': 'It actually stands for Queer AND Questioning!',
                'factWrong': 'It stands for Questioning AND Queer!',
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
                'fact': 'The Q in LGBTQ stand for Queer',
                'factImg': flag,
                'factRight': 'It actually stands for Queer AND Questioning!',
                'factWrong': 'It stands for Questioning AND Queer!',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'There is no relevance to Pride Month, it can be any month!',
                'factImg': stonewall,
                'factRight': 'LGBT Pride Month occurs in the United States to commemorate the Stonewall riots, which occurred at the end of June 1969.',
                'factWrong': 'LGBT Pride Month occurs in the United States to commemorate the Stonewall riots, which occurred at the end of June 1969.',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'California becomes the first state in the United States to decriminalize homosexuality',
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
                'fact': 'The above image is the Lesbain flag',
                'factImg': intersex,
                'factRight': 'It is an intersex flag',
                'factWrong': 'It is an intersex flag',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Intersex gender is similiar to transgender',
                'factImg': intersex,
                'factRight': 'Intersex is a general term used for a variety of conditions in which a person is born with a reproductive or sexual anatomy that doesn\'t seem to fit the typical definitions of female or male.',
                'factWrong': 'Intersex is a general term used for a variety of conditions in which a person is born with a reproductive or sexual anatomy that doesn\'t seem to fit the typical definitions of female or male.',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
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
                'fact': 'Section 377 in India was decriminalised on 6th sept 2018',
                'factImg': section,
                'factRight': 'On September 6, 2018, a historic judgment was made by the Supreme Court of India which decriminalized Section 377 of Indian Penal Code.',
                'factWrong': 'It is true that On September 6, 2018, a historic judgment was made by the Supreme Court of India which decriminalized Section 377 of Indian Penal Code. ',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'Sexuality and gender are the same thing',
                'factImg': sexgender,
                'factRight': 'Sexuality is your emotional and physical attraction to someone, whereas gender is more about self expression',
                'factWrong': 'Sexuality is your emotional and physical attraction to someone, whereas gender is more about self expression',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
            },
            {
                'fact': 'Individuals who are gender non-conforming usually go by they/them pronouns',
                'factImg': pronoun,
                'factRight': 'True! Let\'s be more inclusive',
                'factWrong': 'It is true. Let\'s be more inclusive',
                'factRightImg': correct,
                'factWrongImg': wrong,
                'rightScore': 1,
                'wrongScore': 0
            },
            {
                'fact': 'Gay men are feminine in nature',
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
                'factRight': 'A actually stands for asexual, agender, aromantic and ally!',
                'factWrong': 'A stands for asexual, agender, aromantic and ally!',
                'factRightImg': wrong,
                'factWrongImg': correct,
                'rightScore': 0,
                'wrongScore': 1
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
