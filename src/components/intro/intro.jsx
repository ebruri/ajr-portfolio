import "./intro.css"
import me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is  </h2>
          <h1 className="i-name">Andrew Rice </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Actor</div>
              <div className="i-title-item">Producer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Director</div>
              <div className="i-title-item">Post Production Coordinator</div>
            </div>
          </div>
          <p className="i-desc">
            Experienced actor. Enthusiastic writer.   
          </p>
        </div>
      </div>
    <div className="i-right"> 
      <div className="i-bg"></div>
      <img src={me} alt="" className="i-img"/>
    </div>
    </div>
  )
  
}

export default Intro