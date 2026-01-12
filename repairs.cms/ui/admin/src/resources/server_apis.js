const PREFIX = "/api/v1";
const BASE_URL = "http://localhost:5000" + PREFIX;

// auth apis
export const LOGIN_URL = BASE_URL + '/auth/user/login';
export const VERIFY_USER_URL = BASE_URL + '/auth/user/verify-user';

// webpage apis
export const LIST_WEBPAGES = BASE_URL + '/webpages';
export const CREATE_WEBPAGE = BASE_URL + '/webpages/create';
export const DELETE_WEBPAGE = BASE_URL + '/webpages/delete';
export const UPDATE_WEBPAGE = BASE_URL + '/webpages/update';

// about us apis
export const ABOUTUS_DETAIL = BASE_URL + '/aboutus-details';
export const CREATE_ABOUTUS = BASE_URL + '/aboutus/create';
export const UPDATE_ABOUTUS = BASE_URL + '/aboutus/update';

// booking apis
export const ALL_BOOKINGS   = BASE_URL + '/bookings';
export const CREATE_BOOKING = BASE_URL + '/bookings/create';
export const UPDATE_BOOKING = BASE_URL + '/bookings/update';
export const DELETE_BOOKING = BASE_URL + '/bookings/delete';

// contact us apis
export const CONTACTUS_DETAIL = BASE_URL + '/contactus';
export const CREATE_CONTACTUS = BASE_URL + '/contactus/create';
export const UPDATE_CONTACTUS = BASE_URL + '/contactus/update';

// settings apis
export const SETTINGS_DETAIL = BASE_URL + '/settings';
export const CREATE_SETTINGS = BASE_URL + '/settings/create';
export const UPDATE_SETTINGS = BASE_URL + '/settings/update';

