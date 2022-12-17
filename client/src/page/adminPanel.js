import React, {useContext} from 'react';
import {MDBContainer} from "mdb-react-ui-kit";
import {Context} from "../index";
import Admin from "../component/Modals/admin/admin";
import CreateCategory from "../component/Modals/admin/createCategory";
import CreateStrategy from "../component/Modals/admin/createStrategy";
import CreatePoint from "../component/Modals/admin/createPoint";
import {observer} from "mobx-react-lite";

const AdminPanel = observer(() => {
    const {points} = useContext(Context)
    return (
        <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className='d-flex justify-content-center'>
            {/*<Admin show={points.showAdmin} onHide={()=>{*/}
            {/*    points.setShowAdmin(false)*/}
            {/*}}/>*/}
            {/*<CreateCategory show={points.showCategory} onHide={()=>{*/}
            {/*    points.setShowCategory(false)*/}
            {/*}}/>*/}
            {/*<CreateStrategy show={points.showStrategy} onHide={()=>{*/}
            {/*    points.setShowStrategy(false)*/}
            {/*}}/>*/}
            {/*<CreatePoint show={points.showCreatePoint} onHide={()=>{*/}
            {/*points.setShowCreatePoint(false)*/}
            {/*}}/>*/}
        </MDBContainer>
        </section>
    );
});

export default AdminPanel;