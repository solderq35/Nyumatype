import GameOver from "./components/GameOver";
import Reset from "./components/Reset";
import Timer from "./components/Timer";
import Typing from "./components/Typing";
import Words from "./components/Words";
import Container from "./components/layout/Container";
import Heading from "./components/layout/Heading";
import useTypingTest from "./hooks/useTypingTest";
import { calculateAccuracy } from "./lib/utils";

function App() {
  const { state, words, timeLeft, typed, errors, restartGame, totalTyped } =
    useTypingTest();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Heading />
      <Timer timeLeft={timeLeft} />
      <Container>
        <Words words={words} />
        <Typing className="absolute inset-0" words={words} userInput={typed} />
      </Container>
      <Reset
        onRestart={restartGame}
        className={"mx-auto mt-10 text-slate-500"}
      />
      <GameOver
        state={state}
        className={"mt-10"}
        errors={errors}
        accuracy={calculateAccuracy(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
}

export default App;