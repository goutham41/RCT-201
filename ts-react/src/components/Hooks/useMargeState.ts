import React, { useState } from "react";

const useMergeState = (initState: any) => {
  const [state, setState] = useState(initState);
  return [state, setState];
};

export default useMergeState;
