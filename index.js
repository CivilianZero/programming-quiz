var prompt = require("prompt-sync")();

var royBatty = [
    {
        question: "Would you like an easier quiz? ",
        answer: "YES",
        difficultyMod: -1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "easy test question",
        answer: "YES",
        difficultyMod: 1,
        asked: false
    }
];

var leonKowalski = [
    {
        question: "You see a turtle laying on its back in the desert, baking in the sun. Why don't you help it? ",
        answer: "WHY WOULD I BE IN THE DESERT?",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "hard test question",
        answer: "YES",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "hard test question",
        answer: "YES",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "Tell me, in single words, all the things that come in to your mind about your mother. ",
        answer: "LET ME TELL YOU ABOUT MY MOTHER",
        difficultyMod: 2,
        asked: false
    }
]

var hardLength = leonKowalski.length,
    howGood = 0,
    doneYet = 0,
    easy = true;

for (i = 0; doneYet <= 15; i++) {

    if (howGood < -6) {
        doneYet = 9000;
        console.log("YOU DIED");
    }

    if (howGood > 2) {
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

    var question = prompt(quiz.question).toUpperCase();

    if (quiz.asked === true) {
        // Skip question
    } else if (question === quiz.answer) {
        howGood += quiz.difficultyMod;
        console.log("you're smarter than you look");
        doneYet++;
    } else {
        howGood -= quiz.difficultyMod;
        console.log("you big dummy");
        doneYet++;
    }
    quiz.asked = true;
    console.log(howGood);
    console.log(doneYet);
}
