import React from 'react'
import { useLocation } from 'react-router-dom';
import TopHead from './TopHead';

function SingleUserDetail() {

    const location = useLocation();
    const userId = location.state.userId;

    return (
        <div className="wrapper">
            <div className="content-page rtl-page">
                <div className="container-fluid">
                    <TopHead name={"Single Users List"} />
                </div>

                <h1>user id is {userId} </h1>
            </div>
        </div>
    )
}

export default SingleUserDetail
