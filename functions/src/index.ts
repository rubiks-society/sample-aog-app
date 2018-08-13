import * as functions from 'firebase-functions';

// we would also have to import Suggestions, BasicCard etc. here if we need them
import { dialogflow } from 'actions-on-google';

// initialize the app
const app = dialogflow();

// whenever the intent "this is my intent name" is fired, this function would be called
// conv would contain all the information about the on going conversation, like the parameters extracted
// what matters for the moment is the part inside {}
app.intent("this is my intent name", conv => {

    // extract the parameters 
    const color = conv.parameters["color"];

    // this sends a response back to user
    conv.ask("You said " + color);

    //use conv.close to end the conversation
});

exports.googleAction = functions.https.onRequest(app);

