import axios from 'axios'
import {
   INSERT_LIST,
} from './types'

export function insertList(dataToSubmit){
    const request = axios.post('/api/list/insert', dataToSubmit)
    .then(response => response.data)

    return {
        type: INSERT_LIST,
        payload: request
    }
}