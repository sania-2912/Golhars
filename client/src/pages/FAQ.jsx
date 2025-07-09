import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What kind of paintings do you sell?",
      answer: "We offer a curated selection of original, handcrafted paintings in various styles including abstract, modern, and traditional."
    },
    {
      question: "How do I place an order?",
      answer: "Simply browse through our catalog, add paintings to your cart, and proceed to checkout with secure payment options."
    },
    {
      question: "Can I request custom sizes or commissions?",
      answer: "Yes! Please use our contact form to send in commission requests. We’ll get back to you with options and pricing."
    },
    {
      question: "What is your return policy?",
      answer: "All sales are final, but we are happy to help resolve any issues related to damage during shipping."
    }
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
