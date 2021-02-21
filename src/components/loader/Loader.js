import React from 'react';
import Loader from 'react-loader-spinner';
import LoaderStyled from './LoaderStyled';

const LoadSpinner = () => {
    return (
        <LoaderStyled>
            <Loader type="ThreeDots" color="#fc842d" height={80} width={80} />
        </LoaderStyled>
    );
};

export default LoadSpinner;
