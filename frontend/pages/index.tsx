// This file needed for local build (but not production build)

import * as React from "react";
import MemeList from "../components/memeList";
import memes from "../memes";

const Index = () => {
  return <MemeList memes={memes} />;
};

export default Index;
