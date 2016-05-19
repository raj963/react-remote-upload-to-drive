import axios from 'axios';

export const GET_CODE_ONEDRIVE = 'GET_CODE_ONEDRIVE';

const clientId = '2f7b9c1d-9a3e-44f0-bd31-7bc6ad5d64ce';
const privateKey = 'A72F21C6C34A4C1FE02A8306DD541C18FD8D28B2';

export function getCode(){
    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
    const request = axios.get(`https://login.live.com/oauth20_authorize.srf?response_type=code&client_id=${clientId}&redirect_uri=http%3A%2F%2Flocalhost%3A8088&scope=onedrive.readwrite+wl.signin`,config).then(function (response) {
        console.log(response.status);
      })
      .catch(function (response) {
        console.log(response.status);
      });;
    console.log(request);
    return {
        type: GET_CODE_ONEDRIVE,
        payload: request
    };
}
