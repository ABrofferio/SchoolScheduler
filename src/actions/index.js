import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';

export const addReminder = (text, dueDate, sectionName, categoryName) => {
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate: dueDate,
    sectionName: sectionName,
    categoryName: categoryName
  }
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id: id
  }
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
