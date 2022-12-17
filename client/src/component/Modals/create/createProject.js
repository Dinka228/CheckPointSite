import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBContainer,
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import {createCategory} from "../../../http/categoryAPI";
import {createProject} from "../../../http/projectAPI";

const CreateProject = ({show,onHide}) => {
    const [newProject, setNewProject] = useState({name:''})
    const [selectPeople,setSelectPeople] = useState({})
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    const addNewProject = () =>  {
        const newUProject={
            ...newProject,id:Date.now(),userId:user.currUser.id,categoryId:points.currCategory.id

        }
        const formData = new FormData()
        formData.append('name',newUProject.name)
        formData.append('userId',newUProject.userId)
        formData.append('categoryId',newUProject.categoryId)

        createProject(formData).then(data=>onHide())
        setNewProject({name:''})
        onHide()

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
                            <MDBModalTitle>Creating department...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={newProject.name}
                                    onChange={e=>setNewProject({...newProject, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter department"}
                                />
                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewProject()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default CreateProject;