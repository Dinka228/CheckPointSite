import React, {useContext, useState} from 'react';
import {Context} from "../../../index";
import {
    MDBBtn,
    MDBCardText,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {createStrategy, fetchStrategy} from "../../../http/strategyAPI";
import {createPoint, fetchPoint} from "../../../http/pointAPI";

const CreatePoint = observer(({show,onHide}) => {
    const [newPoint, setNewPoint] = useState({name:'',predictedValue:0})
    const [selectPeople,setSelectPeople] = useState({})
    const [showSuccess,setShowSuccess] = useState(false)
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    function addNewPoint()   {
        const newUPoint={
            ...newPoint,id:Date.now(),strategyId:points.currStrategyForAdmin.id

        }
        const formData = new FormData()
        formData.append('name',newUPoint.name)
        formData.append('predictedValue',newUPoint.predictedValue)
        formData.append('strategyId',newUPoint.strategyId)

        createPoint(formData).then(data=>{
            fetchPoint().then(data=>{
                points.setPoints(data)
                console.log(points.points)
            }
            )
            onHide()})
        setNewPoint({name:'',predictedValue:0})
        setShowSuccess(true)

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
                            <MDBModalTitle>Creating Point...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBCardText className="text-muted">
                                <div className="col-xs-5">
                                    <select style={{borderRadius:20, width:400, fontSize:20}} onChange={(e)=>{
                                        console.log(e.target.value)
                                        points.strategy.filter(strategyFilter=>{
                                            if(strategyFilter.name === e.target.value){
                                                points.setCurrStrategyForAdmin(strategyFilter)
                                                console.log(points.currStrategyForAdmin)
                                            }
                                        })
                                    }}>
                                        <option value="" disabled selected>{!points.currStrategyForAdmin.name  ? `Choose strategy` : points.currStrategyForAdmin.name}</option>
                                        {points.strategy.map(strategy=><option key={strategy.id}>{strategy.name}</option>)}
                                    </select>
                                </div>
                            </MDBCardText>
                            <Form>
                                <Form.Control
                                    value={newPoint.name}
                                    onChange={e=>{
                                        setShowSuccess(false)
                                        setNewPoint({...newPoint, name: e.target.value})}
                                    }
                                    className='mt-3'
                                    placeholder={"Enter name"}
                                />
                                <Form.Control
                                    value={newPoint.predictedValue}
                                    onChange={e=>{
                                        setShowSuccess(false)
                                        setNewPoint({...newPoint, predictedValue: Number(e.target.value)})
                                    }}
                                    className='mt-3'
                                    placeholder={"Enter predictedValue"}
                                />
                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            {
                                showSuccess ?
                                    <div className='mb-2' style={{color:"green"}}>
                                    Creating Success!
                                </div>:<div></div>
                            }

                            <MDBBtn color="secondary" onClick={()=>{
                                points.setShowAdmin(true)
                                onHide()
                            }}>
                                Back to Admin Panel
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewPoint()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default CreatePoint;