import {get} from '../utils/http';

export function searchPatient(searchString){
    let uri = '/openmrs/ws/rest/v1/patient?q='+searchString;
    return get(uri)
}