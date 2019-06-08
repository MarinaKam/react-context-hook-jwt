import { useState ,useEffect } from 'react';
import axios from 'axios/index';
import {URL} from './apis';

const useResources = resource => {
    const [lang, setLanguage] = useState({});
    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(`${URL}${resource}`);
                setLanguage(response.data);
            })(resource);
        },
        [resource]);
    return lang;
};

export default useResources;




