export const BASE_URL = 'https://cm63274.tmweb.ru';
export const USERS_API = `${BASE_URL}/users`;
export const AUTH = `${BASE_URL}/auth`;
export const USER = (id: number) => `${BASE_URL}/users/${id}`;
export const LIKE = (id: number) => `${BASE_URL}/users/${id}/likes`;
export const DISCOVER = (id: number) => `${BASE_URL}/users/${id}/for`;