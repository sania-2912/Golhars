import React, { useState } from "react";
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
    question: "How can I contact you regarding an order?",
    answer:
      "If you have a question about an existing order or a potential purchase, please use the form under the 'Contact' tab or email us directly at golhars.27@gmail.com. For order-related inquiries, please include your order number."
  },
  {
    question: "What is a Fine Art Print?",
    answer:
      "A fine art print is a high-quality reproduction of an original painting using archival inks and paper. These prints often come in limited editions and may be signed or numbered, offering collectors a long-lasting and affordable way to own art."
  },
  {
    question: "How will I receive my digital artwork?",
    answer:
      "After purchasing a digital product, a secure download link will be emailed to you instantly. Please make sure to check your spam folder if it doesn’t arrive within a few minutes."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), UPI, PayPal, and other secure payment gateways. All options will be visible at checkout."
  },
  {
    question: "What is your shipping and return policy?",
    answer:
      "Orders are processed within 5–7 business days. Shipping time depends on your location—typically 3–4 weeks for international orders. Customers are responsible for any customs fees. Returns are accepted only if the product is damaged on arrival."
  },
  {
    question: "Can I request a painting in a different size or color palette?",
    answer:
      "Absolutely! We welcome customization. Please contact us via the form on the Contact page with your ideas. We'll get back to you with options and pricing."
  },
  {
    question: "Are the paintings framed?",
    answer:
      "Unless specified, paintings are shipped unframed to allow you to choose a frame that fits your space and style. Framing options may be available upon request."
  },
  {
    question: "Is the artwork signed?",
    answer:
      "Yes, all original paintings and limited edition prints come signed by the artist, either on the front or back depending on the piece."
  }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
          >
            <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </h3>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
