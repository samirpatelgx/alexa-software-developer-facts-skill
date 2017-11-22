'use strict';
var Alexa = require("alexa-sdk");


const APP_ID = 'amzn1.ask.skill.b5b48531-6669-40de-85e8-a62444a6694b';

const SKILL_NAME = "Software Developer Facts";
const GET_FACT_MESSAGE = "Here's your fact: "
const HELP_MESSAGE = 'You can say tell me a Software Developer Fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    'In 2017, only 13.1% of developers are actively looking for a job. But 75.2% of developers are interested in hearing about new job opportunities.',
    'In 2017, 53.3% of developers said remote options were a top priority. A majority of developers, 63.9%, reported working remotely at least one day a month, and 11.1% say they’re full-time remote or almost all the time.',
    'In 2017, a majority of developers said they were underpaid. Developers who work in government and non-profits feel the most underpaid, while those who work in finance feel the most overpaid.',
    'In 2017, about three-quarters of respondents identify as web developers, although many also said they are working to build desktop apps and mobile apps.',
    'In 2017, Compared to the rest of the world, the United States has a higher proportion of people who identify as full stack web developers, whereas Germany has a comparatively lower proportion. As for mobile developers, the U.S. and United Kingdom have proportionally more iOS developers and fewer Android developers than the rest of the world.',
    'A common misconception about developers is that they\'ve all been programming since childhood. In fact, we see a wide range of experience levels. Among professional developers, one-eighth (12.5%) learned to code less than four years ago, and an additional one-eighth (13.3%) learned to code between four and six years ago. Due to the pervasiveness of online courses and coding bootcamps, adults with little to no programming experience can now more easily transition to a career as a developer.',
    'In 2017, web and mobile developers have significantly less professional coding experience, on average, than developers in other technical disciplines such as systems administration and embedded programming.',
    'In 2017, among current professional developers globally, 76.5% of respondents said they had a bachelor’s degree or higher, such as a Master’s degree or equivalent.',
    'In 2017, more than half (54.2%) of professional developers who had studied at a college or university said they had concentrated their studies on computer science or software engineering, and an additional quarter (24.9%) majored in a closely-related discipline such as computer programming, computer engineering, or information technology. The remaining 20.9% said they had majored in other fields such as business, the social sciences, natural sciences, non-computer engineering, or the arts.',
    'In 2017, Of current professional developers, 32% said their formal education was not very important or not important at all to their career success. This is not entirely surprising given that 90% of developers overall consider themselves at least somewhat self-taught: a formal degree is only one aspect of their education, and so much of their practical day-to-day work depends on their company’s individual tech stack decisions.',
    'In 2017, Developers love to learn: 90% say they are at least partially self-taught. Among current professional developers, 55.9% say they’ve taken an online course, and 53.4% say they’ve received on-the-job training.',
    'In 2017, by far, reading official documentation and using Stack Overflow Q&A are the two most common ways developers level up their skills.',
    'In 2017, due to the high demand for professional developers, coding bootcamps have exploded in popularity in the past few years. Although commonly perceived as a way for non-developers to transition into a new career, we found that 45.8% of those who said they’d gone through a bootcamp were already developers when they started the program. This is likely because many developers decide at various parts in their career that they need to upgrade their skills or learn new technologies to stay relevant in the job market.',
];


exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest' : function() {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent' : function() {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent' : function() {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent' : function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent' : function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
};
