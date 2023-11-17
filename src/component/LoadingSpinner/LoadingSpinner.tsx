import React from 'react';
import css from "./LoadingSpinner.module.css"
import {CircleLoader} from "react-spinners";

const LoadingSpinner = () => {
    return (
            <div className={css.spinnerContainer}><CircleLoader color={'#fefefe'}/></div>
    );
};

export default LoadingSpinner;