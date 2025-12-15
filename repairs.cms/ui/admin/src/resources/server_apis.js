const PREFIX = "/api/v1";
const BASE_URL = "http://localhost:5000" + PREFIX;

// webpage apis
export const LIST_WEBPAGES = BASE_URL + '/webpages';
export const CREATE_WEBPAGE = BASE_URL + '/webpages/create';
export const DELETE_WEBPAGE = BASE_URL + '/webpages/delete';