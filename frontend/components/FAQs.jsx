'use strict'

import React from 'react';
import FaqPanel from './FaqPanel.jsx';

const FAQs = [
    {
        question: 'What should I wear?',
        answer: '<p>The MBL is very casual, but – and this is completely optional – some students bring something a little dressier for the technology venture proposal presentations on the last night. </p><p>While you’re working in the lab, please keep in mind proper laboratory dress code, i.e., closed toe shoes, long pants, long hair tied back, etc. </p><p>Weather in Woods Hole in early spring is variable; it can be windy and snowy or sunny and warm. Check the weather forecast before you pack, and consider bringing a hat, gloves, jacket, and layers that are easy to add/remove. You’ll likely want to explore a bit, so bring comfortable shoes.</p>'
    },
    {
        question: 'What will my room be like?',
        answer: '<p>You will share your bedroom and bathroom with an assigned roommate of the same sex. Each room has 2 twin beds, sheets, towels, a blanket, and a pillow. For your reference when reading the MBL’s <a class=\'bl-link\' href=\'http://www.mbl.edu/housing/files/2014/02/What-to-expect-in-your-dorm-room.pdf\'>description of dorm rooms<\a> and <a class=\'bl-link\' href=\'http://www.mbl.edu/housing/mbl-housing-information/guest-services/\'>guest services information</a>, you will be staying in Swope.</p><p>Please bring toiletries with you. It can be chilly in early spring, so you might want to bring an extra blanket.</p>'
    },
    {
        question: 'Should I bring my computer?',
        answer: '<p>If you have a laptop or other portable device, you may bring it with you; you will be able to access the MBL’s wifi once you are on campus.</p>'
    },
    {
        question: 'When will I hear whether I have been accepted?',
        answer: '<p>We aim to notify applicants of their status in December, before winter break, but cannot guarantee a particular date.</p>'
    },
    {
        question: 'Attending the MBL Practicum will cause me to miss class/labs/exams at my home institution. What should I do?',
        answer: '<p>As soon as you are invited to attend the MBL Practicum, contact your professors and discuss your options. In many cases, the faculty at your home institution will be willing to work with you and allow you to turn in your work early/late/electronically, attend a different lab section, or take an exam remotely. There are (often) ways to make up missed work, as long as you contact your professors early, present them with a plan, and follow through on the execution of that plan.</p><p>Please note that it is your responsibility to contact your professors and request permission for you to miss class; MBL Practicum faculty will not do so on your behalf.</p>'
    },
];

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderFAQs = this.renderFAQs.bind(this);

        this.state = {
            visibleFAQ: null
        };
    }

    toggleAnswer(answerIdx) {
        let visibleFaqIdx = (this.state.visibleFAQ === answerIdx) ? null : answerIdx;

        this.setState({
            visibleFAQ: visibleFaqIdx
        });
    }

    renderFAQs() {
        return FAQs.map((faq, idx) => {
            return (
                <FaqPanel
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>MBL Undergraduate Practicum FAQs</h2>
                {this.renderFAQs()}
                <p>Have a question that is not answered here? <a class='bl-link' href='/contact-us'>Contact us!</a></p>
            </div>
        );
    }
}

export default Carousel;
