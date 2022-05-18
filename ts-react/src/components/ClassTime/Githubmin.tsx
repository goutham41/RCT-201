import React from "react";
import axios, { AxiosResponse } from "axios";
import styles from "../ProductManagement/style.module.css";

import { useFetch } from "../Hooks/useFatch";
type User = {
  id: number;
  login : string;
  avatar_url : string;
};
 let url = "https://api.github.com/search/users";
const Githubmin = () => {
  const [text, setText] = React.useState("");
  const { loading, data, error } = useFetch<User>(url, {
    per_page: 5,
    q: text || "masai-codes",
   });
  return (
    <>
      <h1>Github Users</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {loading && <h3 style={{ marginTop: "40px" }}>LOADING....</h3>}
      {error && <h3 style={{ marginTop: "40px" }}>Some Thing Went Wrong</h3>}
      {!loading && data && (
        <div className={styles.github}>
          {data.map( (user) => {
            return (
              <>
                <div >
                  <h3> {user.login}</h3>
                  <p>{user.id}</p>
                  <img width={250} height={250} src={user.avatar_url} alt="" />
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Githubmin;



// const [data1, setData] = React.useState<User[]>([]);
{
  /* <button
  onClick={() => {
    axios
    .get("https://api.github.com/search/users", {
              params: {
                per_page: 15,
                q: text || "masai",
              },
            })
            .then(({ data }) => {
              setData(data.items);
            });
        }}
      >
        Search
      </button> */
 }