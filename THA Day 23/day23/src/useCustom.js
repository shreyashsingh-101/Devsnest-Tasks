import { useState, useCallback } from "react";

export const useCustom = (initial) => {
  const [state, setState] = useState(initial);
  return {
    state,
    setState,
    twice: useCallback(() => {
      setState(state * 2);
    }),
    thrice: useCallback(() => {
      setState(state * 3);
    }),
    increment: useCallback(() => {
      setState(state + 1);
    }),
    decrement: useCallback(() => {
      setState(state - 1);
    }),
    half: useCallback(() => {
      setState(state / 2);
    }),
    zero: useCallback(() => {
      setState(0);
    }),
  };
};
