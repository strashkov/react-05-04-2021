import { RSAA, getJSON } from 'redux-api-middleware';


export const START_PROFILEDATA_LOADING = '@@profile/START_PROFILEDATA_LOADING';
export const SUCCESS_PROFILEDATA_LOADING = '@@profile/SUCCESS_PROFILEDATA_LOADING';
export const ERROR_PROFILEDATA_LOADING = '@@profile/ERROR_PROFILEDATA_LOADING';

export const loadProfileData = () => ({
   [RSAA]: {
       endpoint: '/api/profileData.json',
       method: 'GET',
       types: [
           START_PROFILEDATA_LOADING,
           {
               type: SUCCESS_PROFILEDATA_LOADING,
               payload: (action, state, res) => getJSON(res).then(
                   json => json,
               ),
           },
           ERROR_PROFILEDATA_LOADING,
       ],
   },
});