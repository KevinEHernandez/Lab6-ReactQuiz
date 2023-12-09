//https://www.w3schools.com/react/react_usestate.asp
import React, { useState } from 'react';

function App() {
	//Questions
	const my_questions = [
		{
			q: 'Which company uses this mascot for their games?',
      img: 'https://www.jaxon.gg/wp-content/uploads/2022/09/valve-valvw.jpeg',
			answers: [
				{ answer: 'Valve', isCorrect: true },
				{ answer: 'Steam', isCorrect: true },
				{ answer: 'Epic Games', isCorrect: false },
				{ answer: 'Riot Games', isCorrect: false },
			],
		},
		{
			q: 'What is this character\'s name?',
      img: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/03/goku-dragon-ball-guru-824x490-11b2006.jpg?quality=90&webp=true&resize=824,550',
			answers: [
				{ answer: 'Kakarot', isCorrect: true },
				{ answer: 'Goku', isCorrect: true },
				{ answer: 'The goat', isCorrect: true },
				{ answer: 'Pikachu', isCorrect: false },
			],
		},
		{
			q: 'Is this man a fraud?',
      img: 'https://pbs.twimg.com/media/FARFZlaXoAA-Kid.jpg',
			answers: [
				{ answer: 'Yes', isCorrect: true },
				{ answer: 'Definitely', isCorrect: true },
				{ answer: 'He did his best (you will get this question wrong)', isCorrect: false },
			],
		},
		{
			q: 'Can you believe this man is in Fortnite?',
      img: 'https://cdn.vox-cdn.com/thumbor/klX4-wBYoA5IOie-PhhytlOXMMk=/0x0:1920x1080/1220x813/filters:focal(787x76:1093x382):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72931047/fortnite_peter_trailer.0.jpg',
			answers: [
				{ answer: 'Yes', isCorrect: true },
				{ answer: 'what', isCorrect: true },
			],
		},
		{
			q: "What series is this man from?",
      img: 'https://board.ttvchannel.com/uploads/db5640/original/3X/1/8/18b25ca5b66d345eb63a19a9d464fd1a46bc59a3.jpg',
			answers: [
			  { answer: "Rayman", isCorrect: true },
			  { answer: "Brawlhalla", isCorrect: true },
			  { answer: "Raving Rabbids", isCorrect: true },
			],
		  },
		  {
			q: "You are enjoying this quiz",
      img: 'https://t4.ftcdn.net/jpg/00/38/04/49/240_F_38044984_lkCYoD7xsb6Pg6haCYCLj5vcelzwv9CX.jpg',
			answers: [
			  { answer: "I am enjoying this quiz", isCorrect: true },
			],
		  },
		  {
			q: "This is a pretty nice picture.",
      img: 'https://wallpapers.com/images/featured/cool-nature-pictures-pqezbkindvbvu0ow.jpg',
			answers: [
			  { answer: "I agree.", isCorrect: true },
			  { answer: "I disagree.", isCorrect: false },
			],
		  },
		  {
			q: "Does he have enemies?",
      img: 'https://staticg.sportskeeda.com/editor/2023/06/bd7d7-16880726799006-1920.jpg?w=840',
			answers: [
			  { answer: "He has no enemies.", isCorrect: true },
			  { answer: "Sometimes", isCorrect: true },
			],
		  },
		  {
			q: "This dude killed hundreds of people - why?",
      img: 'https://img.freepik.com/premium-photo/miyamoto-musashi-was-swordsman-who-thrived_630290-2868.jpg',
			answers: [
			  { answer: "Self defense", isCorrect: true },
			  { answer: "Normal for the time period", isCorrect: true },
			  { answer: "He was having fun", isCorrect: false },
			],
		  },
		  {
			q: "Was he justified? (commited genocide)",
      img: 'https://i.pinimg.com/originals/7e/ce/c4/7ecec434137d1fcbe023db38e06c1260.jpg',
			answers: [
			  { answer: "No", isCorrect: true },
			  { answer: "Yes", isCorrect: false },
			],
		  },
	];

	//https://www.w3schools.com/react/react_usestate.asp
	const [currentQ, setcurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [show_score, set_show_score] = useState(false);

	const answer_click = (isCorrect) => {
		if (isCorrect) {setScore(score+1);}

		if (currentQ + 1 < 10) {
			setcurrentQ(currentQ + 1);
		} else {
			set_show_score(true);
		}

	};
	return (
		<div className='app'>
			{show_score ? (
				<div className='score-section'>
					Score: {score} out of 10. 
					Refresh to try again!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQ + 1}</span>/10
						</div>
						<div className='question-text'>{my_questions[currentQ].img && (
            <img
              src={my_questions[currentQ].img}
              alt={`Question ${currentQ + 1}`}
              className="question-image"
            />
          )}
          {my_questions[currentQ].q}
        </div>
      </div>
					<div className='answer-section'>
						{my_questions[currentQ].answers.map((answers) => (
							<button onClick={() => answer_click(answers.isCorrect)}>{answers.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
