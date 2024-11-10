import { Link } from "react-router-dom";
import "./chatList.css";
import { Aperture, CircleHelp, CirclePlus } from "lucide-react";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DashBoard</span>
      <Link to="#" className="link">
        <CirclePlus />
        Tạo đoạn chat mới
      </Link>
      <Link to="#" className="link">
        <Aperture />
        Khám phá tính năng AI
      </Link>
      <Link to="#" className="link">
        <CircleHelp />
        Trợ giúp
      </Link>
      <hr></hr>
      <span className="title">Đoạn chat gần đây</span>
      <div className="list">
        <Link to="/dashboard/chats/243423">My chat title</Link>
       
      </div>
      <hr></hr>
      <div className="upgrade">
        <img src="/logo.png" alt=""  />
        <div className="text">
          <span>Upgrade to Gemini Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
