import React, {useContext} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import TrForStrategy from "./TrForStraregy";
import {observer} from "mobx-react-lite";

const SelectStrategy = observer(() => {
    const {points} = useContext(Context)
    const history = useHistory()
    console.log('click2')
    return (
        <section>
            <MDBContainer className="py-5 h-100">
                    <MDBRow  className="d-flex justify-content-center align-items-center">
                        <MDBCol  md="12" xl="12">
                            <MDBCard className="mask-custom">
                                <MDBCardBody className="p-4 text-white">
                                    <div className="text-center pt-3 pb-2">
                                        <h2 className="my-4" style={{color:"black"}}>{points.currCategory}</h2>
                                    </div>
                                    <div className="text-center pt-3 pb-2">
                                        <h4 className="my-4" style={{color:"black"}}>Choose Your Strategy</h4>
                                    </div>
                                    <MDBTable className="text-white mb-0">
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col" style={{color:"black"}}>Strategy Name</th>
                                                <th scope="col" style={{color:"black"}}>Point1</th>
                                                <th scope="col" style={{color:"black"}}>Point1</th>
                                                <th scope="col" style={{color:"black"}}>Point1</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {
                                                points.strategy.map(strategy=><TrForStrategy key={strategy.id} strategy={strategy}/>)
                                            }
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        </section>
    );
});

export default SelectStrategy;