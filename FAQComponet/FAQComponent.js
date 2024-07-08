import React, { useState } from "react";
import faqsData from "./assets/faq-lists.json";
import "./assets/faqs.css";

const FAQComponent = () => {
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(0);
  const faqs = faqsData.faqs;

  const handleBtnClick = (index) => {
    setSelectedFaqIndex(index === selectedFaqIndex ? -1 : index);
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <div className="question">
              <button onClick={() => handleBtnClick(index)}>
                {selectedFaqIndex === index ? "-" : "+"}
              </button>
              <strong>{faq.question}</strong>
            </div>
            {selectedFaqIndex === index && <p className="answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQComponent;
