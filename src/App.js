import { createContext, useState } from "react";
import CreateProject from "./components/CreateProject/CreateProject";
import Dashboard from "./components/Dashboard/Dashboard";
import ViewProject from "./components/ViewProject/ViewProject";

export const FormContext = createContext();

function App() {
  
  const [showCreatePage, setShowCreatePage] = useState(false);
  const [showViewPage, setViewPage] = useState(false);

  const onCreateProjectHandler = () => {
    setShowCreatePage(true);
    setViewPage(false);
  } 

  const onBacktoDashboardHandler = () => {
    setShowCreatePage(false);
    setViewPage(false);
  }

  const onProjectListHandler = (data) => {
    setViewPage(true);
  }

  return (
    <>
    {/* <Header name="Code Craft"></Header> */}
    <div style={{margin: '20px', padding: '20px'}}>
    {!showCreatePage && !showViewPage && <Dashboard onClick={onCreateProjectHandler} onRowClick={onProjectListHandler}></Dashboard> }
    {showCreatePage && !showViewPage && <CreateProject onClick={onBacktoDashboardHandler}></CreateProject>}
    {!showCreatePage && showViewPage && <ViewProject></ViewProject>}
    </div>
    
     
    </>
   
  );
}

export default App;
