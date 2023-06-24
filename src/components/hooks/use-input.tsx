import { useReducer } from "react";

interface inputState {
  value: string;
  isTouched: boolean;
}
const initialInput = { value: "", isTouched: false };
const reducerFunction = (
  state: inputState,
  action: { type: string; value: any }
) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInput;
};
const useInput = (validate: Function) => {
  const [inputState, dispatch] = useReducer(reducerFunction, initialInput);

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHandler = (event: any) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({
      type: "BLUR",
      value: undefined,
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET",
      value: undefined,
    });
  };
  return {
    enteredValue: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
