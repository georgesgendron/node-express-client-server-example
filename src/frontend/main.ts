import * as model from '../common/models';
import * as $ from 'jquery';
import axios from 'axios';

async function insertMessage() {
    try {
        let axiosResponse = await axios.get('/message');
        let response: model.MessageResponse = axiosResponse.data;
        if (response.successful) {
            let container = $('#message');
            container.text(response.message);
        } else {
            let container = $('#error');
            container.text(response.errorMessage);
        }
    } catch (e) {
        alert(JSON.stringify(e));
    }
}

insertMessage();