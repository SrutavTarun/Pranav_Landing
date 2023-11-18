import "./styles/features.css";

import Exclude from "../assets/exclude.svg";
import Underline from "../assets/Underline.svg";
import RightArrow from "../assets/Arrow-forward.svg";

import Features1 from "../assets/Features-1.png";
import Features2 from "../assets/Features-2.png";
import Features3 from "../assets/Features-3.png";

const features = () => {
  return (
    <>
      <div className="features">
        <div className="f-heading">Key Features</div>
        <div className="Underline">
            <img src={Underline} alt="Underline" />
        </div>
        <div className="Feature-1">
          <div className="f-content">
            <div className="f-head">Predict Possible ADR's</div>
            <div className="f-text">
              <ul>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Give prescription and
                  predict ADR’s
                </li>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Predict possible
                  Drug-Drug Interactions
                </li>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Predict the severity
                  of ADR’s
                </li>
              </ul>
              <button className="f-btn">Predict <img src={RightArrow} alt="Right Arrow" /></button>
            </div>
          </div>
          <div className="f-image">
            <img src={Features1} alt="Features1" />
          </div>
        </div>
        <div className="Feature-2">
        <div className="f-image">
            <img src={Features2} alt="Features2" />
          </div>
          <div className="f-content">
            <div className="f-head">Report ADRs</div>
            <div className="f-text">
              <ul>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Report observed ADR’s in patients.
                </li>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Keeps a log of observed ADR’s 
                </li>
              </ul>
              <button className="f-btn">Report <img src={RightArrow} alt="Right Arrow" /></button>
            </div>
          </div>
          
        </div>
        <div className="Feature-1">
          <div className="f-content">
            <div className="f-head">Upload EHR and predict ADR’s</div>
            <div className="f-text">
              <ul>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Give prescription and predict ADR’s
                </li>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Predict possible Drug-Drug Interactions
                </li>
                <li>
                  <img src={Exclude} alt="Exclude Icon" /> Predict the severity of ADR’s
                </li>
              </ul>
              <button className="f-btn">Upload <img src={RightArrow} alt="Right Arrow" /></button>
            </div>
          </div>
          <div className="f-image">
            <img src={Features3} alt="Features3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default features;
