import React from "react";
import { Link } from "react-router-dom"

const mainImage :React.FC = () => {
  return (
      <div className="mainBodyCss">
        <div className="mainImageCss">
          <Link to="/">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #C5DFF8", backgroundColor: "#C5DFF8", position: "absolute", marginLeft:"180px", marginTop:"25px"}}>질문과 응답의 방</button>
          </Link>

          <Link to="/page404">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #FF9B9B", backgroundColor: "#FF9B9B", position: "absolute", marginLeft:"260px", marginTop:"185px"}}>운과 음식의 방</button>
          </Link>

          <Link to="/favorite">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #1FAB89", backgroundColor: "#1FAB89", position: "absolute", marginLeft:"50px", marginTop:"470px"}}>여유와 취미의 방</button>
          </Link>

          <Link to="/learnAndWrite">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #27496D", backgroundColor: "#27496D", position: "absolute", marginLeft:"160px", marginTop:"435px", color:"white"}}>배움과 기록의 방</button>
          </Link>

          <Link to="/page404">
            <button className="mainImageButtonCss" style = {{ border: "1px solid #E966A0", backgroundColor: "#E966A0", position: "absolute", marginLeft:"275px", marginTop:"520px"}}>정신과 시간의 방</button>
          </Link>

        </div>
      </div>
  )
}

export default mainImage;