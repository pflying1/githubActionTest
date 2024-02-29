import React from "react";
import Logo from "../components/logo"
import "../styles/luckAndFood.css"
import LuckAndFoodIntro from "../components/luckAndFoodIntro"
import LuckAndFoodBody from "../components/luckAndFoodBody"

const luckAndFood:React.FC = () => {
  return (
    <div className="luckAndFoodCss">
      <Logo />
      <LuckAndFoodIntro />
      <LuckAndFoodBody />
    </div>
  )
}

export default luckAndFood;