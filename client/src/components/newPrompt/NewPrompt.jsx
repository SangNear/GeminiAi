import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";
const NewPrompt = () => {
  const endRef = useRef(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, image]);

  const add = async (prompt) => {
    setQuestion(prompt);

    const result = await model.generateContent(
      Object.entries(image.aiData).length ? [image.aiData, prompt] : [prompt]
    );

    setAnswer(result.response.text());
  };

  const btnSubmit = async (e) => {
    e.preventDefault();
    const prompt = e.target.text.value;
    if (!prompt) return;

    add(prompt);
  };

  return (
    <>
      {question && <div className="message user">{question}</div>}

      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      {image.isLoading && <div className="loading">Loading Image...</div>}
      {image.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={image.dbData?.filePath}
          width={380}
          transformation={[{ width: 380 }]}
        />
      )}
      <div ref={endRef} className="endChat"></div>
      <form className="newForm" onSubmit={btnSubmit}>
        <Upload setImage={setImage} />

        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
