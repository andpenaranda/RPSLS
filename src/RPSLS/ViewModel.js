import { useEffect, useState } from "react";

const RPSLSViewModel = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  const ready = result && computerChoice && playerChoice ? true : false;

  const computerChoose = () => {
    const randomChoice = Math.floor(Math.random() * 5);
    setComputerChoice(choices[randomChoice]);
  };

  const getResult = (playerChoice, computerChoice) => {
    if (
      (playerChoice === "rock" &&
        (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (playerChoice === "paper" &&
        (computerChoice === "rock" || computerChoice === "spock")) ||
      (playerChoice === "scissors" &&
        (computerChoice === "paper" || computerChoice === "lizard")) ||
      (playerChoice === "lizard" &&
        (computerChoice === "paper" || computerChoice === "spock")) ||
      (playerChoice === "spock" &&
        (computerChoice === "rock" || computerChoice === "scissors"))
    ) {
      setResult("You win !!!");
    }

    if (
      (playerChoice === "rock" &&
        (computerChoice === "paper" || computerChoice === "spock")) ||
      (playerChoice === "paper" &&
        (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (playerChoice === "scissors" &&
        (computerChoice === "rock" || computerChoice === "spock")) ||
      (playerChoice === "lizard" &&
        (computerChoice === "rock" || computerChoice === "scissors")) ||
      (playerChoice === "spock" &&
        (computerChoice === "paper" || computerChoice === "lizard"))
    ) {
      setResult("Computer win !!!");
    }

    if (playerChoice === computerChoice) {
      setResult("It's a tie -_-");
    }
  };

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    computerChoose();
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      getResult(playerChoice, computerChoice);
    }
  }, [playerChoice, computerChoice]);

  return {
    computerChoice,
    handleClick,
    playerChoice,
    ready,
    result,
  };
};

export default RPSLSViewModel;
