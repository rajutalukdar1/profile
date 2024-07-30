import React from 'react';
import { CircleLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <CircleLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;