import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../lib/utils";
import useTimer from "./useTimer";
import useWords from "./useWords";
import useKeys from "./useKeys";

export type State = "start" | "run" | "end";

const NUMBER_OF_WORDS = 20;
const TIMER_SECONDS = 30;

export default function useTypingTest() {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { timeLeft, startTimer, resetTimer } = useTimer(TIMER_SECONDS);
  const { cursorPosition, typed, clearTyped, totalTyped: typedTotal } = useKeys(state !== "end");
  const [errors, setErrors] = useState(0);
  const isStart = state === "start" && cursorPosition > 0;
  const areWordsFinished = cursorPosition === words.length;

  const [cumulativeTypedTotal, setCumulativeTypedTotal] = useState(0);

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursorPosition);
    setErrors((prev) => prev + countErrors(typed, wordsReached));
  }, [typed, words, cursorPosition]);

  useEffect(() => {
    if (isStart) {
      setState("run");
      startTimer();
    }
  }, [isStart, startTimer, cursorPosition]);

  useEffect(() => {
    if (!timeLeft && state === "run") {
      console.log("Time's up");
      setState("end");
      sumErrors();
    }
  }, [timeLeft, state, sumErrors]);

  useEffect(() => {
    if (areWordsFinished) {
      console.log("[useTypingTest/areWordsFinished]: Words finished!");
      sumErrors();
      updateWords();
      clearTyped();
      setCumulativeTypedTotal((prevTotal) => prevTotal + typedTotal);
    }
  }, [cursorPosition, words, clearTyped, typed, areWordsFinished, updateWords, sumErrors, typedTotal]);

  const restartGame = useCallback(() => {
    console.log("[useTypingTest/restartGame]: Restarting typing test!");
    resetTimer();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
    setCumulativeTypedTotal(0);
  }, [clearTyped, updateWords, resetTimer]);

  const totalTyped = cumulativeTypedTotal + typedTotal;

  return { state, words, timeLeft, typed, errors, totalTyped, restartGame };
}
