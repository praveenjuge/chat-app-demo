/************************************************************************/
/******* CONVENIENCE METHODS AVAILABLE FOR ES6 BUILD ENVIRONMENTS *******/
/************************************************************************/

// the URL of where you've installed the component; you may need to change this:
import { Bubbles, prepHTML } from "./component/Bubbles.js"

// this is a convenience script that builds all necessary HTML,
// imports all scripts and stylesheets; your container DIV will
// have a default `id="chat"`;
// you can specify a different ID with:
// `container: "my_chatbox_id"` option
prepHTML({relative_path: "/stylesheets"})

var chatWindow = new Bubbles(
  document.getElementById("chat"), // ...passing HTML container element...
  "chatWindowHandler" // ...and name of the function as a parameter
)
// `.talk()` will get your bot to begin the conversation
chatWindow.talk(
  // pass your JSON/JavaScript object to `.talk()` function where
  // you define how the conversation between the bot and user will go
  {
    // "ice" (as in "breaking the ice") is a required conversation object
    // that maps the first thing the bot will say to the user
    ice: {
      // "says" defines an array of sequential bubbles
      // that the bot will produce
      says: ["Hey!", "Can I have a banana?"],
      // "reply" is an array of possible options the user can pick from
      // as a reply
      reply: [
        {
          question: "🍌", // label for the reply option
          answer: "banana" // key for the next conversation object
        }
      ]
    }, // end required "ice" conversation object
    // another conversation object that can be queued from within
    // any other conversation object, including itself
    banana: {
      says: ["Thank you!", "Can I have another banana?"],
      reply: [
        {
          question: "🍌🍌",
          answer: "banana"
        }
      ]
    } // end conversation object
  } // end conversation object
)
