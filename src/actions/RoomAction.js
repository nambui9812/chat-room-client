import axios from 'axios';

import store from '../store';

import {
    //ROOMS_LOADING,
    ROOMS_LOADED,
    ROOMS_LOADED_FAIL
} from './types';

// Load room
export const loadRooms = (userId) => {
    const config = {
        headers: {
            'Authorization': userId
        }
    };

    axios
        .get('/api/rooms/user/', config)
        .then(res => {
            store.dispatch({
                type: ROOMS_LOADED,
                payload: res.data.data
            });
        })
        .catch(err => {
            console.log(err);
            store.dispatch({
                type: ROOMS_LOADED_FAIL
            });
        })
    
};
