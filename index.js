var prompt = require("prompt-sync")();

var royBatty = [
    {
        question: "Who are you? ",
        answer: "me",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 1,
        asked: false
    }
];

var leonKowalski = [
    {
        question: "You see a turtle laying on its back in the desert, baking in the sun. Why don't you help it? ",
        answer: "Why would I be in the desert?",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "",
        answer: "",
        difficultyMod: 2,
        asked: false
    },
    {
        question: "Tell me, in single words, all the things that come in to your mind about your mothers. ",
        answer: "Let me tell you about my mother",
        difficultyMod: 2,
        asked: false
    }
]

for (i = 0; i < 1; i++) {
    var quiz = royBatty[i],
        hardQuiz = leonKowalski[i],
        question = prompt(quiz.question),
        howGood = 0;

    if (question === quiz.answer) {
        howGood += quiz.difficultyMod;
        console.log("you're smarter than you look");
    } else {
        howGood -= quiz.difficultyMod;
        console.log("you big dummy");
    }
}
