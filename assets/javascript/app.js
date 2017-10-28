$(document).ready(function(){

	$(".timer").hide();	

	var count = 30;
	var counter;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unAnswered = 0;
	$(".questionsContainer").hide();
	var myForm = $(".questionForm");
	var questions = [{
    question: "Which island does Moana call home?",
    choices: ["Maui", "Aitutaki", "Taveuni"],
    correctAnswer: "Motunui"
  }, {
    question: "What is the name of her pet Pig?",
    choices: ["Paao", "Hei Hei", "Pahoehoe"],
    correctAnswer: "Pua"
  }, {
    question: "When Moana visits an ancient cave, what does she discover about her ancestors?",
    choices: ["They were farmers.", "They were scientists.", "They were cannibals."],
    correctAnswer: "They were voyagers."
  }, {
    question: "What kind of aquatic animal does Moana's grandmother come back as after she dies?",
    choices: ["Whale", "Crab", "Octupus"],
    correctAnswer: "Manta Ray"
  }, {
    question: "Before Maui can save the world, who does he have to get his hook back from?",
    choices: ["Tui", "Te Ka", "Kakamora"],
    correctAnswer: "Tamatoa"
  }, {
    question: "Where does Tamatoa live?",
    choices: ["Realm of Darkness", "Real of the Dead", "The Center of the Earth"],
    correctAnswer: "Realm of Monsters"
  }, {
    question: "What is the name of the lava monster they face before getting to Te Fiti?",
    choices: ["Pahoehoe", "Te AA", "Motonui"],
    correctAnswer: "Te Ka"
  }, {
    question: "How did Maui start the spread of darkness in the world?",
    choices: ["By stealing the hook from the Gods", "By opening door to the underworld", "By starting a war between Gods"],
    correctAnswer: "By stealing Fiti's Heart"
  }, {
    question: "Why is Moana's father so against traveling beyond the reef?",
    choices: ["He doesn't want the people to get lost", "He's seen the monsters in the underworld", "His mother warned him of the dangers"],
    correctAnswer: "He tried when he was younger and his bestfriend died because of it"
  }];


  	// FUNCTION TO START GAME GOES HERE:
	function startGame(){

		$('#startBtn').on('click', function(){
			$('#startBtn').hide();
			$('#timer').show();
			$('#questionContainer').show();
			$('#submit').show();

			timer();
		});

		myForm.on("submit", onSubmit);

		$('#scores').hide();
	}

	// FUNCTION FOR TIMER GOES HERE:
	function timer() {
		$(".timer").html("Time: " + count + "seconds");

		if (count === 0) {
			onSubmit();
		} else {
			count--;
			counter = setTimeout(timer, 1000);
			// the above code makes the timer continously subtract each second
		}
	} 



	// FUNCTION TO SHOW QUESTIONS ON PAGE GOES HERE:
	function displayQuestions(){

		for (var i=0; i < questions.length; i++) {

			var question_el = $('<p>').html(questions[i].question);
			// named var differently because var question already exists
			var choices_el = $('<div>');

				questions[i].choices.forEach(function(choice) {
					// another way to for loop is forEach (look it up!!)
					choices_el.append(
						// this adds it to the end of choices_el
						$('<label class="choice">')
						.append($('<input type="radio" name="q_' + i + '" value="' + choice + '"/>'))
						.append(choice)
						// this appending the choices to the end of each button
					)
				});

				$('#questionContainer').append(
					$('<div class="question">')
					.append(question_el)
					.append(choices_el)
				);
				// for (var j=0; j < questions[i].choices[j].length; j++) {
				// 	console.log(questions[i].choices[j]);
				// PREPEND adds anything before the element
				}
		}
	}

	// FUNCTION TO SUBMIT QUESTIONS GOES HERE:
	function onSubmit(){
		clearTimeout(counter);
		// the above code makes the timer stop counting
		for (var i = 0; i < questions.length; i ++) {

		 	console.log("questions", questions[i].correctAnswer);
		 	console.log("value", myForm[0]['q_' + i].value);

		 	if (myForm[0]['q_' + i].value === ""){
		 		unanswered++;
		 		$('#unansweredScore').html(unanswered);
		 	}
			else if (questions[i].correctAnswer == myForm[0]['q_' + i].value) {
				correctCount++;
				$('#correctScore').html(correctCount);
			}
			else {
				incorrectCount++;
				$('#incorrectScore').html(incorrectCount);
			}

		}

		$('#submit').hide();
		$('#questionContainer').hide();
		$('#scores').show();
		return false;

	}



displayQuestions();
startGame();

});
