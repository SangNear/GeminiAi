import React, { useEffect, useRef } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";
const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">
            Text from AI Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Magnam enim incidunt quisquam debitis fugit dignissimos
            reprehenderit voluptatibus dolor. Aliquam expedita eos veritatis
            nemo cum molestiae. Nemo alias eius facilis odit?
          </div>
          <div className="message user">
            Text from User Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nihil dolores enim odio itaque, nulla at unde officia maxime
            veniam sit pariatur tempore velit soluta. Aspernatur, dolores dicta!
            Dolore, iusto adipisci!
          </div>
          <div className="message">Text from AI</div>
          <div className="message user">Text from User</div>
          <div className="message">Text from AI</div>
          <div className="message user">Text from User</div>
          <div className="message">Text from AI</div>
          <div className="message user">Text from User</div>
          <div className="message">Text from AI</div>
          <div className="message user">Text from User</div>
          <div className="message">Text from AI</div>
          <div className="message user">Text from User</div>
          <div className="message">Text from AI</div>
          <div className="message user">Text from User</div>

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
