import styles from "./RPSLS.module.css";
import useViewModel from "./ViewModel";

export const RPSLS = () => {
  const { computerChoice, handleClick, playerChoice, ready, result } = useViewModel();

  console.log(ready);
  console.log(result);
  console.log(computerChoice);
  console.log(playerChoice);
  
  return (
    <div align="center">
      <h2>Rock Paper Scissors Lizard Spock</h2>
      <p>Choose your weapon:</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => handleClick("rock")}>
          Rock
        </button>
        <button className={styles.button} onClick={() => handleClick("paper")}>
          Paper
        </button>
        <button
          className={styles.button}
          onClick={() => handleClick("scissors")}
        >
          Scissors
        </button>
        <button className={styles.button} onClick={() => handleClick("lizard")}>
          Lizard
        </button>
        <button className={styles.button} onClick={() => handleClick("spock")}>
          Spock
        </button>
      </div>
      {ready && (
        <div>
          <p>You chose --- {playerChoice}</p>
          <p>Computer chose --- {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};
