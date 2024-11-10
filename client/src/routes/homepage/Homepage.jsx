import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>GEMINI</h1>
        <h2>Nâng cao khả năng sáng tạo và tăng năng suất</h2>
        <h3>
          Trò chuyện với AI của Google để bắt đầu viết nội dung, lên kế hoạch,
          học tập và hơn thế nữa
        </h3>
        <Link to="/dashboard">Bắt đầu trò chuyện</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src="/bot.png" alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                1000,
                "We produce food for Guinea Pigs",
                1000,
                "We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt=""  />
        <div className="links">
          <Link to="/">Chính sách dịch vụ</Link>
          <span>|</span>
          <Link to="/">Chính sách bảo mật</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
