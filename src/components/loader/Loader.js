import React from 'react';
import Loader from 'react-loader-spinner';
import LoaderStyled from './LoaderStyled';

const LoadSpinner = () => {
    return (
        <LoaderStyled>
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </LoaderStyled>
    );
};

export default LoadSpinner;
