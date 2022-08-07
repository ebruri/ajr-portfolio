import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import WorkList from "./components/workList/WorkList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";



const App = () => {
  return (
    <div>
      <Toggle/>
      <Intro/>
      <About/>
      <WorkList/>
      <Contact/>
    </div>
  )
};

export default App;