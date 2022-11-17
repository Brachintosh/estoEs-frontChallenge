import { CREATE, UPDATE, DELETE } from "./actions";
import Swal from 'sweetalert2'

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
      
      Swal.fire({
        title: 'Do you want to delete this project?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Project was deleted!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Project was not deleted.', '', 'info')
        }
      })
      
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