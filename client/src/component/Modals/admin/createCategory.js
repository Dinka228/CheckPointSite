import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
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
import {Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {createCategory} from "../../../http/categoryAPI";

const CreateCategory = observer(({show,onHide}) => {
    const [newCategory, setNewCategory] = useState({name:''})
    const [selectPeople,setSelectPeople] = useState({})
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    const addNewCategory = () =>  {
        const formData = new FormData()
        formData.append('name',newCategory.name)

        createCategory(formData).then(data=>onHide())

    }
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
                            <MDBModalTitle>Creating Category...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={newCategory.name}
                                    onChange={e=>setNewCategory({...newCategory, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter Category"}
                                />
                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                points.setShowAdmin(true)
                                onHide()
                            }}>
                                Back to Admin Panel
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewCategory()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default CreateCategory;