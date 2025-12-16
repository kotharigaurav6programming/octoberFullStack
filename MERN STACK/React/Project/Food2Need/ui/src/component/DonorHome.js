import React from 'react';
import {createRoot} from 'react-dom/client';
import { useSelector } from 'react-redux';

function DonorHome(){
    const donorObj = useSelector(state=>state.donor);
    console.log("email : ",donorObj.loggedInEmail);
    
    return (<>
        welcome {donorObj.loggedInEmail}
    </>);
}

export default DonorHome;