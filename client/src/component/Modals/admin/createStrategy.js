import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import {
    MDBBtn, MDBCardText,
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
import {createStrategy, fetchStrategy} from "../../../http/strategyAPI";

const CreateStrategy = observer(({show,onHide}) => {
    const [newStrategy, setNewStrategy] = useState({name:''})
    const [selectPeople,setSelectPeople] = useState({})
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    const addNewStrategy = () =>{
        const newUStrategy={
            ...newStrategy,id:Date.now(),categoryId:points.currCategory.id

        }
        const formData = new FormData()
        console.log(points.currCategory.id)
        formData.append('name',newUStrategy.name)
        formData.append('categoryId',points.currCategory.id)

        createStrategy(formData).then(data=>{
            fetchStrategy().then(data=>{points.setStrategy(data)})
            onHide()})
        setNewStrategy({name:''})

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
                            <MDBModalTitle>Creating Strategy...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBCardText className="text-muted">
                                <div className="col-xs-5">
                                    <select style={{borderRadius:20, width:400, fontSize:20}} onChange={(e)=>{
                                        console.log(e.target.value)
                                        points.category.filter(categoryFilter=>{
                                            if(categoryFilter.name === e.target.value){
                                                points.setCurrProject({})
                                                points.setCurrCategory(categoryFilter)
                                            }
                                        })
                                        console.log(points.currCategory.name)
                                    }}>
                                        <option value="" disabled selected>{!points.currCategory.name  ? `Choose your category` : points.currCategory.name}</option>
                                        {points.category.map(category=><option key={category.id}>{category.name}</option>)}
                                    </select>
                                </div>
                            </MDBCardText>
                            <Form>
                                <Form.Control
                                    value={newStrategy.name}
                                    onChange={e=>setNewStrategy({...newStrategy, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter Strategy"}
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
                                addNewStrategy()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default CreateStrategy;