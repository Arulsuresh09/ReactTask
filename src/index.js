import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Statemanagement from './components/Statemanagement';
// import ConditionalRendering from './components/ConditionRendering';
// import Form from './components/Form';
// import withMouseTracker from './components/Component composition/withMouseTracker';
// import DisplayMousePosition from './components/Component composition/DisplayMousePosition';
// import DataFetcher from './components/DataFetcher';
// import Connect from './components/Routing React/Connect';
// import ConnectApp from './components/State Lift-Up and Props Drilling/ConnectApp';/
// import App from './components/Context Api/App';
import Connection from './components/Splitting and Lazy Loading/Connection';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const EnhancedMousePosition = withMouseTracker(DisplayMousePosition);

root.render(
  <React.StrictMode>
    
    {/* <App /> */}
    {/* <Statemanagement/> */}
    {/* <ConditionalRendering /> */}
    {/* <Form/> */}

    {/* <withMouseTracker/>
    <DisplayMousePosition/> */}

    {/* <DataFetcher/> */}

    {/* <Connect /> */}

    {/* <ConnectApp/> */}

      {/* <App/> */}

      <Connection/>


  </React.StrictMode>
);

