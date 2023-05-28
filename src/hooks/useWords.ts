import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

function generateWords(count: number) {
      // This is deprecated, but I like the words it generates better.
      return faker.random.words(count).toLowerCase()
      // This is the new way to generate words.
      // return faker.word.words(count).toLowerCase();
}

export default function useWords(count: number) {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
}