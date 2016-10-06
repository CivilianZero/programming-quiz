var prompt = require("prompt-sync")();

var royBatty = [
    {
        question: "div:last-child <-- what is this thing on the end of div?",
        choices: true,
        choice1: "A. pseudoscience",
        choice2: "B. pseudoclass",
        choice3: "C. Socks",
        choice4: "D. Sudowudo",
        answer: "B",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What does CSS stand for?",
        choices: true,
        choice1: "A. Equal representation for turtles",
        choice2: "B. Communal Style Sorcerers",
        choice3: "C. Concave System Stuff",
        choice4: "D. Cascading Style Sheets",
        answer: "D",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What is the first git command you must run?",
        choices: true,
        choice1: "A. git withit",
        choice2: "B. git onit",
        choice3: "C. git init",
        choice4: "D. git toit",
        answer: "C",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "Which of the following is not a semantic tag?",
        choices: true,
        choice1: "A. <section>",
        choice2: "B. <div>",
        choice3: "C. <aside>",
        choice4: "D. <header>",
        answer: "B",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What does a selector do",
        choices: true,
        choice1: "A. Stops the Autobots from saving the world",
        choice2: "B. Tells CSS what HTML it applies to",
        choice3: "C. Chooses Javascript properties",
        choice4: "D. Always chooses D",
        answer: "B",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "Which of the following changes the default dot on a <li> inside a <ul>?",
        choices: true,
        choice1: "A. list-type",
        choice2: "B. margin: 0 auto",
        choice3: "C. list-style-type",
        choice4: "D. style-list",
        answer: "C",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What does the p in <p> stand for?",
        choices: true,
        choice1: "A. pants",
        choice2: "B. pacific",
        choice3: "C. paragraph",
        choice4: "D. pez-dispenser",
        answer: "C",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What is your favorite color?",
        choices: true,
        choice1: "A. Red",
        choice2: "B. Blue",
        choice3: "C. Green",
        choice4: "D. Five",
        answer: "B",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What does HTML stand for?",
        choices: true,
        choice1: "A. Hyperactive Tyrannosaurus Make Laugh",
        choice2: "B. Hypertext Markup Language",
        choice3: "C. Hyper Textual Markup Look",
        choice4: "D. Hyperlinks and Text Making Lines",
        answer: "B",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "Fill in the blank: <a ____='google.com'>google THIS</a>",
        choices: false,
        answer: "HREF",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "Which is the correct way to put an image in HTML?",
        choices: true,
        choice1: "A. <img href=image.jpg alt='someplace'>",
        choice2: "B. <img href='someplace'>image.jpg</img>",
        choice3: "C. <link href='someplace'>image.jpg</link>",
        choice4: "D. <img src='here.com'>",
        answer: "A",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "What is the default display property of a <p> tag?",
        choices: true,
        choice1: "A. inline-block",
        choice2: "B. block",
        choice3: "C. inline",
        choice4: "D. static",
        answer: "B",
        difficultyMod: 1,
        asked: false
    }
];

var leonKowalski = [
    {
        question: "What is the correct order for the values of the Margin, Padding, and Border CSS properties?",
        choices: true,
        choice1: "A. top bottom right left",
        choice2: "B. right top left bottom",
        choice3: "C. bottom bottom bottom bottom",
        choice4: "D. top right bottom left",
        answer: "D",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "Which of the following has the highest specificity?",
        choices: true,
        choice1: "A. #wrong > .right + div p",
        choice2: "B. #right + .wrong div",
        choice3: "C. section > div + div > p span",
        choice4: "D. a tyrannosaurus tex",
        answer: "A",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "What is best in life?",
        choices: false,
        answer: "TO CRUSH YOUR ENEMIES, SEE THEM DRIVEN BEFORE YOU, AND HEAR THE LAMENTATIONS OF THEIR WOMEN",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "Tell me, in single words, only the good things that come in to your mind about your mother. ",
        choices: false,
        answer: "LET ME TELL YOU ABOUT MY MOTHER",
        difficultyMod: 2,
        asked: false
    }
];

var hardLength = leonKowalski.length,
    howGood = 0,
    doneYet = 0,
    easy = true,
    question,
    quiz,
    i;

for (i = 0; doneYet < 15; i++) {

    if (howGood < -6) {
        console.log("YOU DIED");
        break;
    }

    if (howGood > 2 && hardLength > 0) {
        if (i !== 0) {
            if (easy === true) {
                i = 0;
            }
        }
        quiz = leonKowalski[i];
        easy = false;

        if (quiz.asked === false) {
            hardLength--;
        }
    } else {
        if (i !== 0) {
            if (easy === false) {
                i = 0;
            }
        }
        quiz = royBatty[i];
        easy = true;
    }

    if (quiz.asked === true) {
        // Skip question
    } else {
        console.log(quiz.question);
        if (quiz.choices === true) {
            console.log(quiz.choice1);
            console.log(quiz.choice2);
            console.log(quiz.choice3);
            console.log(quiz.choice4);
        }
        question = prompt("-->").toUpperCase();

        if (question === quiz.answer) {
            howGood += quiz.difficultyMod;
            console.log("You're smarter than you look!");
            doneYet++;
        } else {
            howGood -= quiz.difficultyMod;
            console.log("...nope");
            doneYet++;
        }
    }
    quiz.asked = true;
}

console.log("Prepare to receive your objective score:");

function grade() {
    if (howGood > 14) {
        console.log("What are you, some kind of GEEN-yus?");
    } else if (howGood > 9) {
        console.log("One less than best.");
    } else if (howGood > 4) {
        console.log("No one will notice you.");
    } else if (howGood > -1) {
        console.log("Do they let you dress yourself?");
    } else {
        console.log("Welcome...to the bottom of the barrel.");
    }
}

setTimeout(grade, 3000);
