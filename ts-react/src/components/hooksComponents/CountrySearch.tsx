import { useDebouncedCallback } from "@react-hookz/web";
import {v4 as uuid} from "uuid"
import React, { useState } from "react";
import {useFetch} from "../Hooks/useFatch";
import Styles from "./counter.module.css";


 type All= {
   country: string,
   city: string,
 };
const url = "http://localhost:8000/data";
const CountrySearch = () => {
    
  const [text, setText] = useState("");

  const [dropDown, setDropDown] = useState(false);

  const { data, error, loading } = useFetch<All>(url, {
    page: 1,
    q: text  || "india",
    _limit: 10,
  });
 

  const onChangeDebouced = useDebouncedCallback(
    (e) => setText(e.target.value),
    [],
    1000,
    0,
  );

  return (
    <div>
      <input
        className={Styles.inp}
        type="text"
        placeholder="Enter Country"
        onChange={(event) => {
          onChangeDebouced(event);
          setDropDown(true);
        }}
        onMouseLeave={() => setDropDown(false)}
      />

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong ...</div>
      ) : (
        <div
          className={!dropDown ? Styles.drop : Styles.hidedropdown}
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          {data ? (
            data.map((elem) => {
              return (
                <p key={uuid()}>
                  {elem.country}({elem.city})
                </p>
              )
            })
          ) : (
            <div>Data Not Found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountrySearch;
