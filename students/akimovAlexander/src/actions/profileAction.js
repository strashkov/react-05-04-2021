export const USER_INFO = '@@INFO/USER_INFO';

export const userInfo = (name, lastName, middleName, country, city, years) => ({
    type: USER_INFO,
    name,
    lastName,
    middleName,
    country,
    city,
    years,
});