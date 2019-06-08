import React, { createContext, useState } from 'react';
import useResource from '../services/useResources';

const UserContext = createContext({
    username: '',
    email: '',
    secretPassword: '',
    setUserDetails: userDetails => {}
});

// export const UserStore = (props) => {
//     const [user, setUser] = useState("english");
//     // const onLanguageChange = language => setLanguage(language);
//     // const lang = useResource('lang');
//     return(
//         <Context.Provider value={{ user }}>
//             { props.children }
//         </Context.Provider>
//     )
// };

export default UserContext;