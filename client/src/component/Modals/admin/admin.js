import React, {useContext} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

const Admin = observer(({show,onHide}) => {
    const {points} = useContext(Context)
    return (
        <>
            <MDBModal
                staticBackdrop
                tabIndex="-1"
                show={show}
                onHide={onHide}
            >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Admin Panel</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div>
                            </div>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color={"secondary"}  onClick={()=>{
                                onHide()
                                points.setShowCategory(true)
                            }}>Create Category</MDBBtn>
                            <MDBBtn color={"secondary"}  onClick={()=>{
                                onHide()
                                points.setShowStrategy(true)
                            }}>Create Strategy</MDBBtn>
                            <MDBBtn color={"secondary"} onClick={()=>{
                                onHide()
                                points.setShowCreatePoint(true)
                            }}>Create Points</MDBBtn>
                            <MDBBtn color={"secondary"}  onClick={()=>{
                                onHide()
                            }}>Close</MDBBtn>

                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default Admin;