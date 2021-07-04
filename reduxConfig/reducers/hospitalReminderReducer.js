//Initial State
const initialState = {
  hospReminder: [],
};

// Reducers (Modifies The State And Returns A New State)
const hospitalReminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_HOSPITAL_REMINDER": {
      //? push the payload into the array, not sure is this method correct or not. check back later
      var cur = state.hospReminder;
      var tmp = action.payload;
      cur.push(tmp);
      return {
        ...state,
        hospReminder: cur,
      };
    }
    case "EDIT_HOSPITAL_REMINDER": {
      //? do a loop and find the same reminder, then update the subsequent data from the payload to the store
      return {
        ...state,
        hospReminder: action.payload,
      };
    }
    case "READ_HOSPITAL_REMINDER": {
      //? read the whole list and display it
      return {
        ...state,
      };
    }
    case "DELETE_HOSPITAL_REMINDER": {
      //? do a loop and find the same reminder, then delete it
      return {
        ...state,
        hospReminder: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default hospitalReminderReducer;
