import React, { useState } from 'react';
import { AppContext, useAppContext } from '../context/appContext';
import EditModal from './EditModal';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const ShowList = () => {
  const { projects, deleteProject } = useAppContext(AppContext);

  const [rowData, setRowData] = useState({});
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (project) => {
    setRowData(project)
    setShow(true);
  };
  

  return (
    <>
      <div style={{ border: "solid #f1f1f1 .1px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5em", padding: ".5em 0"}}>
        <h4 style={{margin: "0 .5em"}}>My Projects</h4>
        <Link to="/addProject" className="btn btn-danger" style={{margin: "0 .5em"}}>
          <i className="fa-solid fa-plus"></i>
          {" "}Add Project
        </Link>
      </div>

      <ul className="list-group list-group-horizontal-xxl text-start mb-4">
      { projects && projects?.map((project) => (
        <div key={project.id + Math.random()}>
      
        <li className="list-group-item">
        <div className="row align-items-start">
          <div className="col-9">
            <h5>{project.name}</h5>
          </div>

          <div className="col-3">
            <div className="btn-group">
              <button className="btn btn-info" onClick={() => handleShow(project)}>
                <i className="fa-regular fa-pen-to-square">
                {/* <p> Edit</p> */}
                </i>
              </button>
              <button className="btn btn-danger" onClick={() => deleteProject(project.id)}>
                <i className="fa-regular fa-trash-can">
                {/* <p> Delete</p> */}
                </i>
              </button>
            </div>
          </div>
          
        </div>
        </li>
        
        <li className="list-group-item">Creation date: {project.id}</li>

        <li className="list-group-item">
          <div style={{display: "flex", flexDirection: "row", justifyItems: "flex-start", alignItems: "center"}} >
            <Image style={{width: "50px", height: "50px"}}  roundedCircle src="https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            <small style={{display: "flex", alignContent: "center", margin: "0 0 0 1em"}} > {project.assignedTo}</small>
          </div>
        </li>
        <br />
        </div>
       )
      )}
      </ul>

      <EditModal show={show} onClose={handleClose} rowData={rowData}/>
    </>
  )
}

export default ShowList;