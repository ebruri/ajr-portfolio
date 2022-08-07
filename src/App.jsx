import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import WorkList from "./components/workList/WorkList";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <WorkList/>
    </div>
  )
};

export default App;