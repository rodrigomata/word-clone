import React from "react";

function Banner({ condition, guesses, answer }) {
  const showBanner = ["win", "lost"].includes(condition);
  const winBanner = condition === "win";
  return (
    <>
      {showBanner && winBanner && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{' '}{guesses} guess{guesses > 1 ? 'es' : ''}</strong>.
          </p>
        </div>
      )}
      {showBanner && !winBanner && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Banner;
