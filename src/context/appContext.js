import { createContext, useContext, useReducer } from "react";
import { CREATE, UPDATE, DELETE } from "./actions";
import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
  projects: [
    {
      id: "16/11/2022 - 17:03",
      name: "Landing Page",
      description: "Some awesome project",
      projectManager: "Steve Jobs",
      assignedTo: "brachintosh",
      status: "pending",
    },
    {
      id: "16/11/2022 - 17:18",
      name: "E-Commerce Shop",
      description: "Extreme awesome project",
      projectManager: "Steve Jobs",
      assignedTo: "Ignacio Truffa",
      status: "enabled",
    },
    {
      id: "16/11/2022 - 17:40",
      name: "CRM Linkroom",
      description: "CRM amazing project",
      projectManager: "Steve Jobs",
      assignedTo: "Ignacio Truffa",
      status: "finished",
    },
  ],
};

export const AppProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const createProject = (project) => dispatch({type: CREATE, payload: project})
  const updateProject = (project) => dispatch({type: UPDATE, payload: project})
  const deleteProject = (id) => dispatch({type: DELETE, payload: id})

  return (
      <AppContext.Provider value={{
        projects: state.projects,
        createProject,
        updateProject,
        deleteProject,
      }}>
          {children}
      </AppContext.Provider>
    )
};

export const useAppContext = () => {
    return useContext(AppContext)
};
