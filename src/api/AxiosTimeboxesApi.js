import axios from "axios";
import {config} from '../Constants'

const url = config.url.API_URL;
const BASE_URL = "http://localhost:8080/stocks/testujemyapsi";

const AxiosTimeboxesAPI = {
    getAllTimeboxes: async function () {
        const response = await axios.get(url+"/stocks/testujemyapsi");
        const timeboxes = response.data;
        return timeboxes;
    },
    addTimebox: async function (timeboxToAdd) {
        const response = await axios.post(BASE_URL, timeboxToAdd);
        const addedTimebox = response.data;
        return addedTimebox;
    },
    replaceTimebox: async function (timeboxToReplace) {
        if (!timeboxToReplace.id) {
            throw new Error("Timebox has to have an id to be updated");
        }
        const response = await axios.put(`${BASE_URL}/${timeboxToReplace.id}`, timeboxToReplace);
        const replacedTimebox = response.data;
        return replacedTimebox;
    },
    removeTimebox: async function (timeboxToRemove) {
        if (!timeboxToRemove.id) {
            throw new Error("Timebox has to have an id to be updated");
        }
        await axios.delete(`${BASE_URL}/${timeboxToRemove.id}`, timeboxToRemove);
    }
}

export default AxiosTimeboxesAPI;