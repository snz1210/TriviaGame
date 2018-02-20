var panel = $("#quiz-area");

var questions = [{
    question: "Which island does Moana call home?",
    answers: ["Maui", "Aitutaki", "Taveuni"],
    correctAnswer: "Motunui"
  }, {
    question: "What is the name of her pet Pig?",
		answers: ["Paao", "Hei Hei", "Pahoehoe"],
    correctAnswer: "Pua"
  }, {
    question: "When Moana visits an ancient cave, what does she discover about her ancestors?",
		answers: ["They were farmers.", "They were scientists.", "They were cannibals."],
    correctAnswer: "They were voyagers."
  }, {
    question: "What kind of aquatic animal does Moana's grandmother come back as after she dies?",
		answers: ["Whale", "Crab", "Octupus"],
    correctAnswer: "Manta Ray"
  }, {
    question: "Before Maui can save the world, who does he have to get his hook back from?",
		answers: ["Tui", "Te Ka", "Kakamora"],
    correctAnswer: "Tamatoa"
  }, {
    question: "Where does Tamatoa live?",
		answers: ["Realm of Darkness", "Real of the Dead", "The Center of the Earth"],
    correctAnswer: "Realm of Monsters"
  }, {
    question: "What is the name of the lava monster they face before getting to Te Fiti?",
		answers: ["Pahoehoe", "Te AA", "Motonui"],
    correctAnswer: "Te Ka"
  }, {
    question: "How did Maui start the spread of darkness in the world?",
		answers: ["By stealing the hook from the Gods", "By opening door to the underworld", "By starting a war between Gods"],
    correctAnswer: "By stealing Fiti's Heart"
  }, {
    question: "Why is Moana's father so against traveling beyond the reef?",
		answers: ["He doesn't want the people to get lost", "He's seen the monsters in the underworld", "His mother warned him of the dangers"],
    correctAnswer: "He tried when he was younger and his bestfriend died because of it"
  }];


var timer;

var game = {

	correct: 0,
	incorrect: 0,
	counter: 120,

	countdown: function () {
		game.counter--;
		$("#counter-number").html(game.counter);
		if (game.counter === 0) {
			console.log("TIME UP");
			game.done();
		}
	},

	start: function () {
		timer = setInterval(game.countdown, 1000);

		$("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

		$("#start").remove();

		for (var i = 0; i < questions.length; i++) {
			panel.append("<h2>" + questions[i].question + "</h2>");
			for (var j = 0; j < questions[i].answers.length; j++) {
				panel.append("<input type='radio' name='question-" + i +
					"' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
			}
		}

		panel.append("<button id='done'>Done</button>");
	},

	done: function () {

		$.each($("input[name='question-0']:checked"), function () {
			if ($(this).val() === questions[0].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-1']:checked"), function () {
			if ($(this).val() === questions[1].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-2']:checked"), function () {
			if ($(this).val() === questions[2].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-3']:checked"), function () {
			if ($(this).val() === questions[3].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-4']:checked"), function () {
			if ($(this).val() === questions[4].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-5']:checked"), function () {
			if ($(this).val() === questions[5].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-6']:checked"), function () {
			if ($(this).val() === questions[6].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		$.each($("input[name='question-7']:checked"), function () {
			if ($(this).val() === questions[7].correctAnswer) {
				game.correct++;
			}
			else {
				game.incorrect++;
			}
		});

		this.result();

	},

	result: function () {

		clearInterval(timer);

		$("#sub-wrapper h2").remove();

		panel.html("<h2>All Done!</h2>");
		panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
		panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
		panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
	}
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
	game.start();
});


$(document).on("click", "#done", function () {
	game.done();
});