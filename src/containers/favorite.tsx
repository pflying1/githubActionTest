import React from "react";
import Logo from "../components/logo"
import "../styles/favorite.css"
import FavoriteIntro from "../components/favoriteIntro"
import FavoriteBody from "../components/favoritebody";

const main:React.FC = () => {
  return (
    <div className="favoriteCss">
      <Logo />
      <FavoriteIntro />
      <FavoriteBody />
    </div>
  )
}

export default main;