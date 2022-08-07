import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import WorkList from "./components/workList/WorkList";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <WorkList/>
      <Contact/>
    </div>
  )
};

export default App;