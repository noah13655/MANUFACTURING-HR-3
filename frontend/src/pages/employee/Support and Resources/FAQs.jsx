import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Employee FAQs</h2>
      <div className="accordion">
        {[
          {
            question: "How do I update my personal information?",
            answer: "To update your personal information, simply click on the 'Update Personal Information' button and fill out the required fields."
          },
          {
            question: "What is the process for submitting an equity adjustment request?",
            answer: "To submit an equity adjustment request, simply click on the 'Equity Adjustment' button and fill out the required fields. Your request will be reviewed and processed by our HR department."
          },
          {
            question: "How do I access my equity information?",
            answer: "You can access your equity information by logging into your account and clicking on the 'Equity' tab."
          },
          {
            question: "Who do I contact if I have questions about my equity?",
            answer: "If you have questions about your equity, please contact our HR department at [jjmHr@company.com](jjmHr@company.com) or 09434355764."
          },
        ].map((faq, index) => (
          <div key={index} className="accordion-item border border-base-300 rounded-md mb-2">
            <h3 className="accordion-header cursor-pointer p-4 bg-base-200 rounded-md" onClick={() => toggleAccordion(index)}>
              {faq.question}
            </h3>
            <div className={`accordion-body p-4 bg-base-100 rounded-md ${activeIndex === index ? 'block' : 'hidden'}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
