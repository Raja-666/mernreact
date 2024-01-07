import React from 'react';
import './helpcenter.scss';

import noItemfoundImage from '../../assets/images/collection/noItemfoundImage.svg';


const HelpCenterCategoryActive = () => {
    const questionList = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10"];
        
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center hpCateActive mb-5">
                <span>Help Center</span>
                <span className="verticalline"></span>
                <span className="">Category Name</span>
                <span className="verticalline"></span>
                <span className="active">Search Results</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="fiterSelectlabel mb-4 flex-fill">
                  <div className="tagLabel">
                    <span>Que</span>
                    <i className="fas fa-times ml-2"></i>
                  </div>
                </div>
                <div className="fs-14 fw-400 dark-text-secondary">
                  837 results
                </div>
              </div>
              <div>
                <div>
                  {questionList.map((question) => (
                    <>
                    <div className="quesListItem">
                      <div>{question}</div>
                      <div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                    </>
                  ))}
                </div>
                <div class="bri_pagenation2 mt-4">
                  <nav aria-label="Page ">
                    <ul class="pagination justify-content-center align-items-center mb-0">
                      <li class="page-item">
                        <a href="#" class="page-link page-link-1 ">
                          {" "}
                          <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.125 5.75L5.71875 1.125C5.84375 0.96875 6.09375 0.96875 6.25 1.125L6.84375 1.75C7 1.875 7 2.125 6.84375 2.28125L3.15625 6L6.84375 9.75C7 9.90625 7 10.125 6.84375 10.2812L6.25 10.9062C6.09375 11.0625 5.84375 11.0625 5.71875 10.9062L1.125 6.28125C0.96875 6.125 0.96875 5.90625 1.125 5.75Z"
                              fill="#F7F7F7"
                            />
                          </svg>
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link active">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <div class="clog">0f</div>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          10
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link page-link-1 ">
                          <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.84375 6.28125L2.28125 10.9062C2.125 11.0625 1.875 11.0625 1.75 10.9062L1.125 10.2812C0.96875 10.125 0.96875 9.90625 1.125 9.75L4.8125 6L1.125 2.28125C0.96875 2.125 0.96875 1.875 1.125 1.75L1.75 1.125C1.875 0.96875 2.125 0.96875 2.28125 1.125L6.84375 5.75C7 5.90625 7 6.125 6.84375 6.28125Z"
                              fill="#F7F7F7"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="noItemFound">
                    <div className="text-center">
                      <img
                        src={noItemfoundImage}
                        alt="noItemfoundImage"
                        className="img-fluid"
                      />
                    </div>
                    <div className="nofounttxt mb-4">
                      No items were found. Try to broaden your search.
                    </div>
                    <div>
                      <button className="applyBtn">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HelpCenterCategoryActive;