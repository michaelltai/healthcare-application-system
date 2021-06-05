const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  DOB: "",
  height: 0,
  weight: 0,
  bpSys: 0,
  bpDia: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER": {
      //? fill all the info
      return {
        ...state,
        firstName: action.payload.fName,
        lastName: action.payload.lName,
      };
    }
    case "UPDATE_USER": {
      //? fill all the relevant info
      return {
        ...state,
        firstName: action.payload.fName,
        lastName,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
