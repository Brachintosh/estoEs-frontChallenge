import { CREATE, UPDATE, DELETE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE: {
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    }

    case UPDATE: {
      return {
        ...state,
        projects: state.projects?.map((project) => {
          return(project.id === action.payload.id) ? action.payload : project;
        })
      }
    
    }
    
    case DELETE: {
      return {
        ...state,
        projects: state.projects?.filter((project) => {
          return project.id !== action.payload;
        })
      };
    }
  
    default:
      return state;
  }
};

export default reducer;