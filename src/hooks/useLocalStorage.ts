// https://www.geeksforgeeks.org/reactjs-uselocalstorage-custom-hook/
import { useState, Dispatch, SetStateAction } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] => {
  // Create state variable to store
  // localStorage value in state
  const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key);

      // If value is already present in
      // localStorage then return it
      // Else set default value in
      // localStorage and then return it
      if (value) {
        return JSON.parse(value) as T;
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  // Este método actualiza localStorage y nuestro estado
  const setLocalStorageStateValue: Dispatch<SetStateAction<T>> = (valueOrFn: SetStateAction<T>) => {
    setLocalStorageValue((prev) => {
      const newValue = typeof valueOrFn === "function" ? (valueOrFn as (prevState: T) => T)(prev) : valueOrFn;
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  };

  return [localStorageValue, setLocalStorageStateValue];
};

export { useLocalStorage };
