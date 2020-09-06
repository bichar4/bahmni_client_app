import {searchPatient} from '../api/patient';

export async function SearchPatients(searchString){
    return await searchPatient(searchString);
}