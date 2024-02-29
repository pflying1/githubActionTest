import React from "react";
import Logo from "../components/logo"
import "../styles/learnAndWrite.css"
import LearnAndWriteIntro from "../components/learnAndWriteIntro"
import LearnAndWriteBody from "../components/learnAndWriteBody"
const learnAndWrite:React.FC = () => {
  return (
    <div className="learnAndWriteCss">
      <Logo />
      <LearnAndWriteIntro />
      <LearnAndWriteBody />
    </div>
  )
}

export default learnAndWrite;