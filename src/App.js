import React, { useState, useRef } from 'react';
import Navigator from 'react.cordova-navigation_controller';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './App.css';
const App = (props) => {

  const [nowPage, setNowPage] = useState("");
  const navigatorRef = useRef(null);
  const menuClick = (e, goToPage) => {
    if (navigatorRef.current) {
      navigatorRef.current.changePage(goToPage);
      document.getElementsByClassName("active")[0].className = "";
      e.currentTarget.className = "active";
    }
  }
  return (
    <Navigator
      onRef={ref => (navigatorRef.current = ref)}
      key="Navigator"
      myApp={this}
      onChangePage={page => {
        setNowPage(page);
      }}
    >
      <Step1 key="step1" levelPage={1} navigatorRef={navigatorRef.current} />
      <Step2 key="step2" levelPage={2} navigatorRef={navigatorRef.current} />
      <Step3 key="step3" levelPage={3} navigatorRef={navigatorRef.current} />
    </Navigator>
  );

}
export default App;
