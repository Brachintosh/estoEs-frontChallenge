import React, { useState } from 'react';
import { AppContext, useAppContext } from '../context/appContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import  { useForm } from 'react-hook-form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Add = () => {
  const { createProject } = useAppContext(AppContext);

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const customSubmit = (data) => {
    console.log("soy la data del form >>>", data)

    createProject({
      id: dateResult,
      name: name,
      description: description,
      projectManager: projectManager,
      assignedTo: assignedTo,
      status: status,
    })

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your project has been saved',
      showConfirmButton: false,
      timer: 1500,
    })

    resetForm();
  };

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
  
  // eslint-disable-next-line
  const handleInputSubmit = (e) => { 
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

  const errorsStyles = { display:"flex", justifyContent:"flex-start", color: "#f2387a", paddingTop: ".5em", marginLeft: "1em",fontWeight: 600};

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

        {/* <form onSubmit={handleInputSubmit}> */}
        <form onSubmit={handleSubmit(customSubmit)}>
          <div className="form-floating mb-4">
            <input
              {...register("name", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                })
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Project Name"
            />
            <label>Project Name</label>
            { errors.name?.type === "required" && <small style={errorsStyles} >New Project must have a name...</small>}
            { errors.name?.type === "minLength" && <small style={errorsStyles} >New Project needs at least five characters.</small>}
            { errors.name?.type === "maxLength" && <small style={errorsStyles} >New Project name it's too long!.</small>}
          </div>

          <div className="form-floating mb-4">
            <input
              {...register("description",{
                  required: true,
                  minLength: 10,
                  maxLength: 150,
                })
              }
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
              id="floatingDescription"
              placeholder="Description"
            />
            <label>Description</label>
            { errors.description?.type === "required" && <small style={errorsStyles} >The Project must have a description...</small>}
            { errors.description?.type === "minLength" && <small style={errorsStyles} >Description needs to be longer.</small>}
            { errors.description?.type === "maxLength" && <small style={errorsStyles} >Description it's too long!.</small>}
          </div>

          {/* DROPDOWNS PARA >> "Project Manager", "Assigned to", "Status"  */}
          <FloatingLabel controlId="selectProjectManager" label="Project Manager" className="mb-4">
            <Form.Select
              {...register("projectManager")}
              value={projectManager}
              onChange={(e) => setProjectManager(e.target.value)}
            >
              <option >Select a Project Manager...</option>
              <option value="Juan Carlos">Juan</option>
              <option value="Joaquin">Joaquin</option>
              <option value="Raul">Raul</option>
            </Form.Select>
          </FloatingLabel>
          {/* testing... */}

          {/* <div className="form-floating mb-4">
            <input
              {...register("projectManager")}
              value={projectManager}
              onChange={(e) => setProjectManager(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder='Project Manager'
            />
            <label>Project Manager</label>
          </div> */}

          <FloatingLabel controlId="selectProjectManager" label="Assigned To" className="mb-4">
            <Form.Select
              {...register("assignedTo")}
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option>Select who to assign...</option>
              <option value="Luka">Luka</option>
              <option value="Tomas">Tomas</option>
              <option value="Maria Juana">Juana</option>
            </Form.Select>
          </FloatingLabel>

          {/* <div className="form-floating mb-4">
            <input
              {...register("assignedTo")}
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder='Assigned to'
            />
            <label>Assigned to</label>
          </div> */}

          <FloatingLabel controlId="selectProjectManager" label="Status" className="mb-4">
            <Form.Select
              {...register("status")}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Select status...</option>
              <option value="Enabled">Enabled</option>
              <option value="Paused">Paused</option>
              <option value="Finished">Finished</option>
              <option value="Cancelled">Cancelled</option>
            </Form.Select>
          </FloatingLabel>

          {/* <div className="form-floating mb-4">
            <input
              {...register("status")}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder='Assigned to'
            />
            <label>Status</label>
          </div> */}

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
