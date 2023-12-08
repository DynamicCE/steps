import { useState } from "react";
const messages = [
  "Learn React ⚛️  ₊˚ʚ ᗢ₊˚✧ ﾟ.",
  "Apply for jobs 💼 (o/////o ' ) ",
  "Earn your new income 🤑📌🏋️‍♂️",
  "Move on to Australia! 🍄🦋🌸♏️💗",
];

export default function App() {
  const [step, setStep] = useState(1); //useState
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState("light");
  function handlePrevious() {
    //useState function
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 4) setStep((s) => s + 1); // setStep'e parametreli fonksiyon yolladık
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {" "}
        {/* is , isOpen yerine geçer */}
        &times;
      </button>
      {isOpen && ( // if isOpen is true, second part will return. if not only false will return
        <div>
          <h1 className="message">THERE IS NO PLAN B !!!</h1>
          <div className="steps">
            <div className="numbers">
              <div className={`${step == 1 ? "active" : ""}`}>1</div>
              <div className={`${step == 2 ? "active" : ""}`}>2</div>
              <div className={`${step == 3 ? "active" : ""}`}>3</div>
            </div>
            <p className="message">
              step {step} :{messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
