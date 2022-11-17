import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AppContext, useAppContext } from '../context/appContext';

const EditModal = ({ show, onClose, rowData }) => {
  const { updateProject } = useAppContext(AppContext);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    projectManager: "",
    assignedTo: "",
    status: "",
  });

  const handleOnChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(formData);
    onClose();
  };

  const { name, description, projectManager, assignedTo, status } = rowData;

  useEffect( () => {
    setFormData(rowData);
  },[rowData]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Modal show={show} onHide={onClose}>
          <Modal.Header className="bg-info text-white" closeButton>
            <Modal.Title>Update Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="m-2">
              <small>Project Name</small>
              <Form.Control
                onChange={(e) => handleOnChange("name", e.target.value)}
                defaultValue={name}
                type="text"
                />
            </Form.Group>

            <Form.Group className="m-2">
              <small>Description</small>
              <Form.Control 
                onChange={(e) => handleOnChange("description", e.target.value)}
                defaultValue={description}
                type="text"
              />
            </Form.Group>

            <Form.Group className="m-2">
              <small>Project Manager</small>
              <Form.Control 
                onChange={(e) => handleOnChange("projectManager", e.target.value)}
                defaultValue={projectManager}
                type="text"
              />
            </Form.Group>

            <Form.Group className="m-2">
              <small>Assigned to</small>
              <Form.Control
                onChange={(e) => handleOnChange("assignedTo", e.target.value)}
                defaultValue={assignedTo}
                type="text"
              />
            </Form.Group>

            <Form.Group className="m-2">
              <small>Status</small>
              <Form.Control
                onChange={(e) => handleOnChange("status", e.target.value)}
                defaultValue={status}
                type="text"
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  )
}

export default EditModal;
