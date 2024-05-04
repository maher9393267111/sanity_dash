import MainLayout from "../../../components/layout/MainLayout";
import React from "react";

const FaqPageMain = ({data}) => {
  return (
    <MainLayout>
      <div className="faq-section scroll-margin pt-120 mb-120" id="faq-section">
        <div className="container">
          <div className="row g-4 mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>{data?.heading}</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                
              <div className="accordion" id="accordionGeneral">
              {data?.list?.map((item, index) => {
return (
                    <div
                    key={index}
                    
                    className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faqcollapseOne"
                          aria-expanded="true"
                          aria-controls="faqcollapseOne"
                        >
                          {index +1} {item?.answer} ?
                        </button>
                      </h2>
                      <div
                        id="faqcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="faqheadingOne"
                        data-bs-parent="#accordionGeneral"
                      >
                        <div className="accordion-body">
                        {item?.question}
                        </div>
                      </div>
                    </div>

)})}
                    </div>


              </div>
            </div>
          </div>

          
        </div>
      </div>
    </MainLayout>
  );
};

export default FaqPageMain;
