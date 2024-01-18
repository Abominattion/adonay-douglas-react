import React, { useState } from "react";

const BasicAccordion = ({
  title = "Analista de desenvolvimento de software",
  content = "Como profissional fullstack, possuo ampla experiência e expertise em uma variedade de tecnologias, incluindo AWS, Node.js, TypeScript, Python, AdonisJS, MySQL e integrações de API via ERP, em ambientes Linux. Além disso, meu conhecimento se estende a outras tecnologias como Vue.js, React, Next.js, PHP e Laravel.",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion shadow-lg text-white my-4">
      <div
        className="accordion-header flex justify-between bg-slate-700 p-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <span>{isExpanded ? "▲" : "▼"}</span>
      </div>
      <div
        className={` bg-slate-900 accordion-content  transition-all  ${
          isExpanded ? "max-h-screen p-2" : "max-h-0 overflow-hidden p-2"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default BasicAccordion;
