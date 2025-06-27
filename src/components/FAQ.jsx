import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
  },
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    question: "This is a very long frequently asked question about our services with more than one line?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc vitae congue justo.",
  },
  {
    question: "This is a frequently asked question?",
    answer:
      "Aliquam erat volutpat. Sed sit amet lacus nec lorem feugiat bibendum.",
  },
  {
    question: "This is a  question?",
    answer:
      "Aliquam erat volutpat. Sed sit amet lacus nec lorem feugiat bibendum.",
  },{
    question: "This is a  question?",
    answer:
      "Aliquam erat volutpat. Sed sit amet lacus nec lorem feugiat bibendum.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#f7f6fb] to-[#efe9fb] py-20 px-6">
  <div className="max-w-2xl mx-auto text-left md:text-center">
    
    <p className="text-orange-500 font-semibold text-2xl sm:text-3xl mb-3">
      FAQ’s
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold mb-12 leading-tight">
      We want to help you <br className="hidden md:block" />
      with all your doubts
    </h2>
    

        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-[radial-gradient(circle_at_top_left,_#f5f3ff,_#fdf4ff)] bg-opacity-90  text-black rounded-xl p-4 shadow-md cursor-pointer transition duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{item.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 font-semibold text-lg ">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
