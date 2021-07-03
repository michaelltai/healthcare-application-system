//Initial State
const initialState = {
  medReminder: [],
};

//Reducers
const medicalReminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MEDICAL_REMINDER": {
      //? push the payload into the array, not sure is this method correct or not. check back later
      var i = action.payload;
      var w = state.medReminder;
      w.push(i);
      return {
        ...state,
        medReminder: w,
      };
    }
    case "EDIT_MEDICAL_REMINDER": {
      //? do a loop and find the same reminder, then update the subsequent data from the payload to the store
      return {
        ...state,
        medReminder: action.payload,
      };
    }
    case "READ_MEDICAL_REMINDER": {
      //? read the whole list and display it
      return {
        ...state,
      };
    }
    case "DELETE_MEDICAL_REMINDER": {
      //? do a loop and find the same reminder, then delete it (DONE)
      return {
        ...state,
        medReminder: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default medicalReminderReducer;
