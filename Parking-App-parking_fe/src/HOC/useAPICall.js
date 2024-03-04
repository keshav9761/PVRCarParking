import { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { URL, } from "../Service/endpoint"

const useAPICall = (method = "GET", endPoints, payload, showToast = true) => {

    const [state, setState] = useState([]);

    const hitAPI = useCallback(async () => {
        try {
            let res;

            switch (method) {
                case 'GET':
                    res = await axios.get(`${URL}/${endPoints}`);
                    showToast && toast.success('Data fetched successfully');
                    break;
                case 'POST':
                    res = await axios.post(`${URL}/${endPoints}`, payload);
                    showToast && toast.info("New data added");
                    break;
                default:
                    throw Error('Method Not Defined')
            }

            setState(res);

        } catch (error) {
            showToast && toast.error(error.message);
            console.log("Error in API Calling", error)
        }

    }, [method, endPoints])


    useEffect(() => {
        if (!endPoints) return;
        hitAPI();
    }, [endPoints, hitAPI])

    return state

}

useAPICall.propTypes = {
    method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']),
    endPoints: PropTypes.string.isRequired
}
export default useAPICall

