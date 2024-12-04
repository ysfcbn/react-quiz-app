function Options({ question, dispatch, answer }) {
  const hasAnswewered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const isSelected = index === answer;
        const isCorrect = index === question.correctOption;

        // Sınıf adlarını dinamik olarak belirleyin
        const buttonClass = `
          btn btn-option 
          ${isSelected ? "answer" : ""} 
          ${hasAnswewered && isCorrect ? "correct" : hasAnswewered && "other"} 
          ${hasAnswewered && isSelected && !isCorrect ? "wrong" : ""}
        `.trim();

        return (
          <button
            className={buttonClass}
            key={option}
            disabled={hasAnswewered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
