$(document).on("click", "#start", function() {
    game.start();
});

$(document).on("click", "#finish", function() {
    game.finish();
});

var janna = $("#quiz");
var questions = [{
        question: "<h3>Celery has negative calories</h3>",
        option: ["    True  ", "    False"],
        Answer: "    False"
    },
    {
        question: "<h3>It takes 7 years to digest gum</h3>",
        option: ["    True  ", "    False"],
        Answer: "    False"
    },

    {
        question: "<h3>Kale has more calcium than milk<h3>",
        option: ["    True  ", "    False"],
        Answer: "    True"
    }
];

var clock;
var game = {

    correct: 0,
    wrong: 0,
    counter: 30,

    timer: function() {
        game.counter--;
        $("#number").text(game.counter);
        if (game.counter === 0) {
            game.finish();
            alert("GAME OVER");
        }
    },

    start: function() {
        $("#start").remove();
        $(".title").remove();
        $("#score").prepend("<h1>Time Left: <container id='number'>30</container> seconds</h1>");
        clock = setInterval(game.timer, 1000);
        for (var i = 0; i < questions.length; i++) {
            janna.append(questions[i].question);

            for (var o = 0; o < questions[i].option.length; o++) {
                janna.append("<input type='radio' name='question-" + i + "' value='" + questions[i].option[o] + "''>" + questions[i].option[o]);
            }
        }
        janna.append("<br><br><button id='finish'>Finish</button>");
    },

    //The score is not adding properly 

    finish: function() {
        if (!$("input[name='question-1']").is(':checked'))
            game.correct++;
        else {
            game.wrong++;
        }

        if (!$("input[name='question-2']").is(':checked'))
            game.correct++;
        else {
            game.wrong++;
        }

        if (!$("input[name='question-3']").is(':checked'))
            game.correct++;
        else {
            game.wrong++;
        }
        this.result();

    },

    result: function() {
        janna.html("<h2>You're Done!</h2>");
        janna.append("<p><br>Correct Answers: " + this.correct + "</p>");
        janna.append("<p>Incorrect Answers: " + this.wrong + "</p>");
        janna.append("<p>No Answer: " + (questions.length - (this.correct + this.wrong)) + "</p>");
        clearInterval(clock);
        timer = null;
    }
};