import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useDebounceState<T>(
  defaultValue: T,
  delay?: number
): [T, Dispatch<SetStateAction<T>>] {
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [value, setValue] = useState<T>(defaultValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 200);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  useEffect(() => {
    if (!firstLoad) {
      setFirstLoad(true);
      return;
    }
    if (firstLoad) {
      setValue(debouncedValue);
    }
  }, [debouncedValue]);

  return [debouncedValue, setValue];
}

export default useDebounceState;
