import React from "react";
import useMergeState from "../Hooks/useMargeState";

const MergeState = () => {
  const initState = {
    username: "",
    email: "",
    password: "",
  };

  const [state, setState] = useMergeState(initState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MergeState;
