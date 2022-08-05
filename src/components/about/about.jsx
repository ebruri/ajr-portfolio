import "./about.css"
import set from "../../img/set1.jpeg"


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={set} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h3 className="a-sub">
        Andrew J Rice was born and raised Murrieta, Calif. He started studying acting at Riverside City College, then was recommended for advanced training at Stan Kirsch Studios in spring 2018. He became proficient with audition technique and character development, and utilized those skills to tackle a pair of challenging theatrical roles – the title character in "The Trial of John Wilkes Booth" and the eccentric Schmendiman in Steve Martin's "Picasso at the Lapin Agile."
        </h3>
        <p className="a-des">
        After that, Andrew gravitated toward gritty and culturally relevant cinematic productions, and discovered that the transition from stage to film was one that came naturally. His first opportunity to establish a screen presence was in the international series "Zahra's New World," playing an adoring husband faced with the hardships of infertility. Andrew quickly gained traction in the film industry and entered principal photography on "Punk Girl Death Brawl" a few months later. With the momentum of a budding acting career, Andrew relocated to Hollywood to be closer to more opportunities on the stage and screen. It’s where he continues to study and work as a professional actor.
        </p>
      </div>
    </div>
  )
};

export default About;