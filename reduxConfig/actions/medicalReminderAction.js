export const createMedReminder = (data) => ({
  type: "CREATE_MEDICAL_REMINDER",
  payload: data,
});

export const editMedReminder = (data) => ({
  type: "EDIT_MEDICAL_REMINDER",
  payload: data,
});

export const readMedReminder = () => ({
  type: "READ_MEDICAL_REMINDER",
});

export const deleteMedReminder = (data) => ({
  type: "DELETE_MEDICAL_REMINDER",
  payload: data,
});

//? maybe need one more to find the exact reminder
