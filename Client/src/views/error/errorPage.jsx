import React from "react";
import "./errorPage.css";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/PageError.png";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="background error-page">
      <div className="parent-container">
        <div className="wrapper">
          <div className="error-container">
            <img src={ErrorImage} alt="error-page" className="pageError" />
            <div className="error-message">
              <button className="button" onClick={handleGoBack}>
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ErrorPage;



