import { useState,useEffect } from "react";
export function useLocalStorageState(initialState,key){
    const [value, setValue] = useState(function () {
        const storedData = localStorage.getItem("watched");
        return storedData?JSON.parse(storedData):initialState;
      });
        //useEffect hook for storing watched movies in local storage.
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value,key]
  );
  return[value,setValue];
}