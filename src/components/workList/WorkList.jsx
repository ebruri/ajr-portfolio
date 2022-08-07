import "./workList.css";
import w1 from "../../img/w1.png"
import w2 from "../../img/w2.jpeg"
import w3 from "../../img/w3.png"

const WorkList = () => {
  return (
    <div className="wl">
      <div className="wl-texts">
        <h1 className="wl-title">My work</h1>
        <p className="wl-desc">
        </p>
      </div>
      <div className="wl-list">
        <div className="w">
          <div className="w-left">
            <div className="l-container">
              <h2 className="w-h2">WEST OF THE USU - Pilot Episode</h2>
              <h3 className="w-h3">Showrunner | Writer | 2nd Director</h3>
              <p className="w-p">Episode 1 - “Pilot” Synopsis: The student-run media organization must adjust to its new dynamics on the first day after a merger.</p>
              <span>Full Episode</span>
            </div>
          </div>
          <div className="w-right">
            <img className="w-img" src={w1} alt=""/>
          </div>
        </div>
        <div className="w">
          <div className="w-left">
            <div className="l-container">
              <h2 className="w-h2">A Mind of their Own</h2>
              <h3 className="w-h3">Actor - Magician</h3>
              <p className="w-p">Synopsis: An overworked writer's characters come to life and fight to take control over her story.</p>
              <span>Trailer</span>
            </div>
          </div>
          <div className="w-right">
            <img className="w-img" src={w2} alt=""/>
          </div>
        </div>     
        <div className="w">
          <div className="w-left">
            <div className="l-container">
              <h2 className="w-h2">Insecurities</h2>
              <h3 className="w-h3">Co-Producer | Actor</h3>
              <p className="w-p">Two 20 something-year-olds must overcome their now personified insecurities or else miss out on a chance at a real connection.</p>
              <span>Coming soon</span>
            </div>
          </div>
          <div className="w-right">
            <img className="w-img" src={w3} alt=""/>
          </div>
        </div> 
        <div className="w">
          <div className="w-left">
            <div className="l-container">
              <h2 className="w-h2">A Night Out</h2>
              <h3 className="w-h3">Co-Producer | Actor | Post Production Coordinator</h3>
              <p className="w-p">Synopsis: Coming soon</p>
              <span></span>
            </div>
          </div>
          <div className="w-right"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;