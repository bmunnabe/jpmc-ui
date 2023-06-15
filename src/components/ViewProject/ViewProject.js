import MultiStep from "react-multistep";
import "./styles.css";
import "./prog-track.css";

import Configuration from "../Forms/Configuration";
import Requirement from "../Forms/Requirement";
import Design from "../Forms/Design";
import TechChoice from "../Forms/TechChoice";
import Development from "../Forms/Development";
import DevelopmentNF from "../Forms/DevelopmentNonFunctional";
import Test from "../Forms/Test";
import Readiness from "../Forms/Readiness";


const steps = [
  { name: "Requirement Phase", component: <Requirement /> },
  { name: "Tech Design Phase", component: <Design /> },
  { name: "Tech Choice Phase", component: <TechChoice /> },
  { name: "Configuration Phase", component: <Configuration /> },
  { name: "Development  Phase", component: <Development /> },
  { name: "DevelopmentNF Phase", component: <DevelopmentNF /> },
  { name: "Testing Phase", component: <Test /> },
  { name: "Readiness Phase", component: <Readiness /> }
];


const ViewProject = (props) => {
  return (
    <MultiStep showTitles={true} showNavigation={true} steps={steps} />
  );
};

export default ViewProject;



