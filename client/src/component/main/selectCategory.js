import React, {useContext} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
const SelectCategory = observer(() => {
    const {points} = useContext(Context)
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="9" xl="12">
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">Select Category</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <div className="row">
                                            <div className="col-xs-5">
                                                <select>
                                                    <option value="" disabled selected>Choose your category</option>
                                                    {points.category.map(category=><option key={category.id}>{category.name}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="12">
                                        <MDBBtn onClick={()=>{
                                            points.setShowCategory(false)
                                            points.setShowStrategy(true)
                                            console.log('click')
                                        }}>Choose</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
});

export default SelectCategory;