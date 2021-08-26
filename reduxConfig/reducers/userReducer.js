const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  DOB: "",
  height: "",
  weight: "",
  bpSys: [],
  bpDia: [],
  recDate: [],
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
        lastName: action.payload.lName,
        gender: action.payload.gender,
        DOB: action.payload.dob,
        height: action.payload.height,
        weight: action.payload.weight,
        bpSys: action.payload.bpsystolic,
        bpDia: action.payload.bpdiastolic,
        recDate: action.payload.recordeddate,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
