import { combineReducers } from "redux";
import hospitalReminderReducer from "./hospitalReminderReducer";
import medicalReminderReducer from "./medicalReminderReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  hospitalReminderReducer: hospitalReminderReducer,
  medicalReminderReducer: medicalReminderReducer,
  userReducer: userReducer,
});

export default rootReducer;
