export const createHospReminder = (data) => ({
  type: "CREATE_HOSPITAL_REMINDER",
  payload: data,
});

export const editHospReminder = (data) => ({
  type: "EDIT_HOSPITAL_REMINDER",
  payload: data,
});

export const readHospReminder = () => ({
  type: "READ_HOSPITAL_REMINDER",
});

export const deleteHospReminder = (data) => ({
  type: "DELETE_HOSPITAL_REMINDER",
  payload: data,
});

//? maybe need one more to find the exact reminder
