import { useEffect, useMemo, useState } from "react";
import style from "./Dashboard.module.css";
import TableContainer from "../Common/TableContainer";
// import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("./data/project-list.json");
      const body = await response.json();
      //   const contacts = body.results
      console.log(body);
      setData(body);
    };
    doFetch();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Project Id",
        accessor: "projectId",
      },
      {
        Header: "Owner",
        accessor: "owner",
      },
      {
        Header: "Project Title",
        accessor: "projectTitle",
      },
      {
        Header: "Project Desc",
        accessor: "projectDesc",
      },
      {
        Header: "Created Date",
        accessor: "createDate",
      },
      {
        Header: "Status",
        accessor: "status",
      }
    ],
    []
  );

  const onRowClickData = (cell) => {
    props.onRowClick(cell);
}

  return (
    <>
      <div className={style.createBtnCont}>
        <button
          className="rounded-md bg-green-800 font-medium text-white my-2 p-2"
          type="button"
         onClick={props.onClick}>
          Create Project
        </button>
      </div>

        <h3>Project List</h3>
        <hr/>
      {/* <Container > */}
        <TableContainer columns={columns} data={data} onRowClick={onRowClickData}/>
      {/* </Container> */}
    </>
  );
};

export default Dashboard;
