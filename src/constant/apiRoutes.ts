export const BASE_URL = 'http://d70242yz.beget.tech';
export const USERS_API = `${BASE_URL}/users`;
export const AUTH = `${BASE_URL}/auth`;
export const USER = (id: number) => `${BASE_URL}/users/${id}`;
export const LIKE = (id: number) => `${BASE_URL}/users/${id}/likes`;
