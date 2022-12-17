import React, {useContext, useEffect, useState} from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem, MDBTable, MDBTableHead, MDBTableBody, MDBTypography, MDBInput, MDBModalBody
} from 'mdb-react-ui-kit';
import {Context} from "../index";
import TrForStrategy from "../component/main/TrForStraregy";
import {observer} from "mobx-react-lite";
import PointDiagram from "../component/diagrams/pointDiagram";
import CreateProject from "../component/Modals/create/createProject";
import CreateStrategy from "../component/Modals/admin/createStrategy";
import CreateCategory from "../component/Modals/admin/createCategory";
import CreatePoint from "../component/Modals/admin/createPoint";
import Admin from "../component/Modals/admin/admin";
import {LOGIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {fetchCategory} from "../http/categoryAPI";
import {fetchProject} from "../http/projectAPI";
import {fetchOneStrategy, fetchStrategy} from "../http/strategyAPI";
import {fetchPoint} from "../http/pointAPI";

const Profile = observer(() => {
    const {points} = useContext(Context)
    const {user} = useContext(Context)
    const history = useHistory()
    const [category,setCategory] = useState('')
    const [point1,setPoint1] = useState('')
    const [point2,setPoint2] = useState(0)
    const [point3,setPoint3] = useState(0)
    useEffect(()=>{
        fetchCategory().then(data=>{points.setCategory(data)})
        fetchProject().then(data=>{points.setProject(data)})
        fetchStrategy().then(data=>{points.setStrategy(data)})
        fetchPoint().then(data=>{points.setPoints(data)})
        console.log(points.points)
    },[])
    function createDiagrams(point,targetValue){

            const newPoint={
                id:Date.now(),name:point.name,point:targetValue,predictedPoint:point.predictedValue, projectId: points.currProject.id, strategyId: points.currStrategy.id

            }
            if(point.name !== point1){
                setPoint1(point.name)
                points.point1.push(newPoint)
            }
    }
    function end(){
        console.log(points.point1)
        points.setShowDiagram(true)
    }
    useEffect(()=>{
        if(!user.isAuth){
            history.push(LOGIN_ROUTE)
        }
    })
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <h2>Profile</h2>
                                <p className="text-muted mb-4">{user.currUser.email}</p>
                                {
                                    user.currUser.role === 'ADMIN' ? <MDBBtn onClick={()=>{
                                        points.setShowAdmin(true)
                                    }
                                    }>Admin Panel</MDBBtn> : <div></div>
                                }

                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-md-0">
                            <MDBCardBody>
                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Choose Department</span></MDBCardText>
                                <MDBTypography listUnStyled className="mb-0">
                                    {
                                        points.project.filter(projectFilter=>{
                                            if(+projectFilter.categoryId === +points.currCategory.id && +projectFilter.userId === +user.currUser.id){
                                                return projectFilter
                                            }
                                        }).map(project=>
                                            <li
                                                className="p-2 border-bottom"
                                                style={{ backgroundColor: "#eee" }}
                                                onClick={()=>{
                                                    points.setCurrProject(project)
                                                    points.setShowPoint(true)
                                                }
                                                }

                                            >
                                                <a href="#!" className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="pt-1">
                                                            <p className="fw-bold mb-0">
                                                                {project.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                </MDBTypography>
                                <MDBBtn className='mt-4' color={"secondary"} onClick={()=>{
                                    points.setShowProject(true)
                                }}>Add department</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Category</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
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
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="12">
                                {
                                    points.currCategory.name && points.currProject.name ?
                                        <MDBCard className="mb-4 mb-md-0">
                                        <MDBCardBody>
                                            <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">{points.currCategory.name ? `Strategy to category: ${points.currCategory.name}` : 'Strategies'}</span> </MDBCardText>
                                            <MDBCard className="mask-custom">
                                                <MDBCardBody className="p-4 text-white">
                                                    <div className="text-center pt-3 pb-2">
                                                        <h1 className="my-4" style={{color:"black"}}>{points.currProject.name ? points.currProject.name : <div></div>}</h1>
                                                        <h2 className="my-4" style={{color:"black"}}>{points.currCategory.name ? points.currCategory.name : <div></div>}</h2>
                                                    </div>
                                                    <div className="text-center pt-3 pb-2">
                                                        <h4 className="my-4" style={{color:"black"}}>Choose Your Strategy</h4>
                                                    </div>
                                                    <MDBRow>
                                                        <MDBCol md="4" lg="5" xl="4" className="mb-4 mb-md-0">
                                                            <h5 className="font-weight-bold mb-3 text-center text-lg-start" style={{color:"black"}}>
                                                                Strategies:
                                                            </h5>
                                                            <MDBCard>
                                                                <MDBCardBody>
                                                                    <MDBTypography listUnStyled className="mb-0">
                                                                        {
                                                                            points.strategy.filter(strategyFilter=>{
                                                                                // console.log(strategyFilter.categoryId)
                                                                                // console.log(points.currCategory.id)
                                                                                if(+strategyFilter.categoryId === +points.currCategory.id){
                                                                                    return strategyFilter
                                                                                }
                                                                            }).map(strategy=>
                                                                                <li
                                                                                    className="p-2 border-bottom"
                                                                                    style={{ backgroundColor: "#eee" }}
                                                                                    onClick={()=>{
                                                                                        points.setShowDiagram(false)
                                                                                        points.setCurrStrategy(strategy)
                                                                                        points.setShowPoint(true)
                                                                                    }
                                                                                    }

                                                                                >
                                                                                    <a href="#!" className="d-flex justify-content-between">
                                                                                        <div className="d-flex flex-row">
                                                                                            <div className="pt-1">
                                                                                                <p className="fw-bold mb-0">
                                                                                                    {strategy.name}
                                                                                                </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                            )
                                                                        }
                                                                    </MDBTypography>
                                                                </MDBCardBody>
                                                            </MDBCard>
                                                        </MDBCol>
                                                        <MDBCol md="8" lg="5" xl="4" className="mb-4 mb-md-0">
                                                            {
                                                                points.showDiagram ?  <div>
                                                                    {/*<label htmlFor="">{point.name}</label>*/}
                                                                    <PointDiagram/>
                                                                    {/*<label htmlFor="">{`Відхилення: `+ `${point.predictedPoint - point.point}`}</label>*/}
                                                                </div> : <div></div>
                                                            }
                                                            {
                                                                !points.showPoint || !points.currStrategy.name ? <div></div> :
                                                                    <MDBCard>
                                                                        <MDBCardBody>
                                                                            <div>
                                                                                {
                                                                                    points.points.filter(pointFilter=>{
                                                                                        if(+pointFilter.strategyId === +points.currStrategy.id){
                                                                                            console.log(pointFilter)
                                                                                            return pointFilter
                                                                                        }
                                                                                    }).map(point=>
                                                                                        <div style={{color:"black"}}>
                                                                                            {point.name}
                                                                                            <MDBInput
                                                                                                placeholder={point.name}
                                                                                                onBlur={e=> {
                                                                                                    createDiagrams(point,e.target.value)
                                                                                                }
                                                                                                }

                                                                                            >
                                                                                            </MDBInput>
                                                                                        </div>
                                                                                    )
                                                                                }

                                                                            </div>
                                                                            <MDBBtn className='mt-4' color={"secondary"} onClick={()=>{
                                                                                points.setShowPoint(false)
                                                                                end()
                                                                            }}>
                                                                                Enter
                                                                            </MDBBtn>
                                                                        </MDBCardBody>
                                                                    </MDBCard>
                                                            }

                                                            : <div></div>
                                                            }
                                                        </MDBCol>
                                                    </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCardBody>
                                    </MDBCard> : <div></div>
                                }

                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <CreateProject show={points.showProject} onHide={()=>{
                    points.setShowProject(false)
                }}/>
                <Admin show={points.showAdmin} onHide={()=>{
                    points.setShowAdmin(false)
                }}/>
                <CreateCategory show={points.showCategory} onHide={()=>{
                    points.setShowCategory(false)
                }}/>
                <CreateStrategy show={points.showStrategy} onHide={()=>{
                    points.setShowStrategy(false)
                }}/>
                <CreatePoint show={points.showCreatePoint} onHide={()=>{
                    points.setShowCreatePoint(false)
                }}/>
            </MDBContainer>
        </section>
    );
});

export default Profile;