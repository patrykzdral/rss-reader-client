import axios from 'axios';
import {config} from '../Constants'

const url = config.url.API_URL;

const AxiosHttpApi = {
    getAllData: async function () {
        const response = await axios.get(`${url}/stocks/testujemyapsi`);
        const returnedData = response.data;
        return returnedData;
    },
    addData: async function (timeboxToAdd) {
        const response = await axios.post(url, timeboxToAdd);
        const addedTimebox = response.data;
        return addedTimebox;
    },
    updateData: async function (dataToReplace) {
        if (!dataToReplace.id) {
            throw new Error('Id does not exists!');
        }
        const response = await axios.put(`${url}/${dataToReplace.id}`, dataToReplace);
        const replacedTimebox = response.data;
        return replacedTimebox;
    },
    removeData: async function (dataToRemove) {
        if (!dataToRemove.id) {
            throw new Error('Data has to have an id to be updated');
        }
        await axios.delete(`${url}/${dataToRemove.id}`, dataToRemove);
    }
};

export default AxiosHttpApi;