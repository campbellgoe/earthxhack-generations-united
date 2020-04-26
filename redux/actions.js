//notifications
export const CREATE_NOTIFICATION = "CREATE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const KEEP_NOTIFICATION_ALIVE = "KEEP_NOTIFICATION_ALIVE";

export const createNotification = payload => ({
  type: CREATE_NOTIFICATION,
  payload
});

export const keepNotificationAlive = key => ({
  type: KEEP_NOTIFICATION_ALIVE,
  payload: { key }
});

export const removeNotification = key => ({
  type: REMOVE_NOTIFICATION,
  payload: { key, removeType: "manual" }
});

//modal

export const SET_MODAL = "SET_MODAL";

export const setModal = ({ kind = "", props } = {}) => ({
  type: SET_MODAL,
  kind,
  props: kind ? props : {}
});

export const SET_PROJECTS = "SET_PROJECTS";

export const setProjects = projects => ({ type: SET_PROJECTS, projects });

// languages

export const SET_LANGUAGES = "SET_LANGUAGES";

export const setLanguages = languagesCheckboxes => ({ type: SET_LANGUAGES, languagesCheckboxes });

// customer

export const ROTATE_CUSTOMERS = "ROTATE_CUSTOMERS";

export const rotateCustomers = rotateDirection => ({ type: ROTATE_CUSTOMERS, rotateDirection });