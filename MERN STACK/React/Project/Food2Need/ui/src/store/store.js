import {configureStore} from '@reduxjs/toolkit';
import commonSlice from './commonSlice.js';
import adminSlice from './adminSlice.js';
import donorSlice from './donorSlice.js';
import ngoSlice from './ngoSlice.js';

export default configureStore({
    reducer : {
        common : commonSlice,
        admin : adminSlice,
        donor: donorSlice,
        ngo : ngoSlice
    }
});