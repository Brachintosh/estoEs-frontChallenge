import React, { useState } from 'react';
import { AppContext, useAppContext } from '../context/appContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Add = () => {
  const { createProject } = useAppContext(AppContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("");

  function getFormattedDate(today) {
    var dd   = today.getDate();
    var mm   = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minu = today.getMinutes();

    if(dd<10)  { dd='0'+dd } 
    if(mm<10)  { mm='0'+mm } 
    if(minu<10){ minu='0'+minu } 

    return ' '+dd+'/'+mm+'/'+yyyy+' - '+hour+':'+minu;
  }
  var date = new Date();
  var dateResult = getFormattedDate(date);

  const resetForm = () => {
    setName("");
    setDescription("");
    setProjectManager("");
    setAssignedTo("");
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createProject({
      id: dateResult,
      name: name,
      projectManager: projectManager,
      assignedTo: assignedTo,
      status: status,
    })

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your project has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    resetForm();
  };

  return (
    <>
      <div className="container text-center mt-2 mb-4">
        <div className="row align-items-start">
          <div className="col-3">
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-dark"
              >
                <i className="fa-solid fa-arrow-left-long"></i>
                {" "}Back
              </button>
            </Link>
          </div>
          <div className="col-6">
            <h2>Add New Project</h2>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Project Name"
          />
          <label>Project Name</label>
        </div>

        <div className="form-floating mb-4">
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
            id="floatingDescription"
            placeholder="Description"
          />
          <label>Description</label>
        </div>

        {/* DROPDOWNS PARA >> "Project Manager", "Assigned to", "Status"  */}
        <div className="form-floating mb-4">
          <input
            value={projectManager}
            onChange={(e) => setProjectManager(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder='Project Manager'
          />
          <label>Project Manager</label>
        </div>

        <div className="form-floating mb-4">
          <input
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder='Assigned to'
          />
          <label>Assigned to</label>
        </div>

        <div className="form-floating mb-4">
          <input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder='Assigned to'
          />
          <label>Status</label>
        </div>

        {/* BTN SUBMIT */}
        <div className="container text-start">
        <div className="row align-items-start mb-4">
          <div className="col-6">
            <button type="submit" className="btn btn-lg btn-danger">Create project</button>
          </div>
        </div>
      </div>

      </form>
    </>
  )
};

export default Add;
