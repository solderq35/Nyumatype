import { faker } from "@faker-js/faker";
import Reset from "./components/Reset";
import Timer from "./components/Timer";
import Words from "./components/Words";
import GameOver from "./components/GameOver";

const words = faker.lorem.words(5);

function App() {
  return (
    <>
      <Timer timeLeft={30} />
      <Words words={words} />
      <Reset className={"mx-auto mt-10 text-slate-500"} onRestart={() => console.log("Restart")} />
      <GameOver className={"mt-10"} errors={10} accuracy={100} total={200} />
    </>
  );
}

export default App;