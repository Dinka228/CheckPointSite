import React, {useContext} from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import SelectCategory from "../component/main/selectCategory";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import SelectStrategy from "../component/main/selectStrategy";
import {useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Main = observer(() => {
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    const history = useHistory()
    if(!user.isAuth){
        history.push(LOGIN_ROUTE)
    }
    return (
        <MDBContainer className='d-flex justify-content-center mt-4'>

        </MDBContainer>

    );
});

export default Main;