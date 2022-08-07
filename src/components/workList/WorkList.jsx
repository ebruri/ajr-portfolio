import "./workList.css";

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
          <div className="w-left"></div>
          <div className="w-right"></div>
        </div>
        <div className="w">
          <div className="w-left"></div>
          <div className="w-right"></div>
        </div>     
        <div className="w">
          <div className="w-left"></div>
          <div className="w-right"></div>
        </div> 
        <div className="w">
          <div className="w-left"></div>
          <div className="w-right"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkList;