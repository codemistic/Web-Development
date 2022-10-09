import React from "react";
import "./Definations.css";

const Definations = ({ category, word, meanings, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: lightMode ? "3b5360" : "#fff",
            borderRadius: 10,
          }}
          controls
        >
          Your browser doesn't support the element.
        </audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search!</span>
      ) : (
        meanings.map((m) =>
          m.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="single-meaning"
                style={{
                  backgroundColor: lightMode ? "#3b5360" : "white",
                  color: lightMode ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definations;
