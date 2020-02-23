import React, { Component } from 'react'
import {
    MDBEdgeHeader,
    MDBFreeBird,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBAnimation,
    MDBNavLink
} from 'mdbreact';
/* import MdbMarketPLaceModel from './MdbMarketPLaceModel';
 */
export default class Mdb extends Component {
    render() {
        return (
            <div className='mt-3 mb-5'>
                <MDBFreeBird>
                    <MDBRow>
                        <MDBCol
                            md='10'
                            className='mx-auto float-none white z-depth-1 py-2 px-2'
                        >
                            <MDBCardBody className='text-center'>
                                {/* <h2 className='h2-responsive mb-4'>
                                    <strong className='font-weight-bold'>
                                        Sell your Products Online or Buy
                                    </strong>
                                </h2>
                                <MDBRow />
                                <p style={{ color: '#111' }}>React Bootstrap with Material Design</p>
                                <p className='pb-4' style={{ color: '#111' }}>
                                    This application shows the actual use of MDB React
                                    components in the application.
                                </p> */}
                                {/* <MDBRow className='d-flex flex-row justify-content-center row'>
                                    <a
                                        className='border nav-link border-light rounded mr-1 mx-2 mb-2'
                                        href='https://mdbootstrap.com/react/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <MDBIcon icon='graduation-cap' className='mr-2' />
                                        <span className='font-weight-bold'>
                                            Official Documentation
                                        </span>
                                    </a>
                                    <a
                                        className='border nav-link border-light rounded mx-2 mb-2'
                                        href='https://mdbootstrap.com/products/react-ui-kit/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <MDBIcon far icon='gem' className='mr-2' />
                                        <span className='font-weight-bold'>PRO</span>
                                    </a>
                                    <a
                                        className='border nav-link border-light rounded mx-2 mb-2'
                                        href='https://mdbootstrap.com/docs/react/getting-started/download/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <MDBIcon icon='download' className='mr-2' />
                                        <span className='font-weight-bold'>FREE</span>
                                    </a>
                                </MDBRow> */}
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='12' className='mt-4'>
                            <h2 className='text-center my-5 font-weight-bold'>
                                Why is it so great?
                            </h2>
                            <p className='text-center text-muted mb-1'>
                                Google has designed a Material Design to make the web more
                                beautiful and more user-friendly.
                            </p>
                            <p className='text-center text-muted mb-1'>
                                Twitter has created a Bootstrap to support you in faster and
                                easier development of responsive and effective websites.
                            </p>
                            <p className='text-center text-muted'>
                                We present you a framework containing the best features of
                                both of them - Material Design for Bootstrap.
                            </p>
                            <hr className='my-5' />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow id='categories'>
                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                                <MDBCard cascade className='my-3 grey lighten-4'>
                                    <MDBCardBody cascade className='text-center'>
                                        <MDBCardTitle>
                                            <img data-test="card-image" src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg" className="img-fluid" />
                                            <strong>Party Cloths <span style={{ color: '#e39906' }}>€30</span></strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            Animations, colours, shadows, skins and many more!
                                            Get to know all our css styles in one place.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                                <MDBCard cascade className='my-3 grey lighten-4'>
                                    <MDBCardBody cascade className='text-center'>
                                        <MDBCardTitle>
                                            <img data-test="card-image" src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" className="img-fluid" />
                                            <strong>Hoodie <span style={{ color: '#e39906' }}>€30</span></strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            Animations, colours, shadows, skins and many more!
                                            Get to know all our css styles in one place.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                                <MDBCard cascade className='my-3 grey lighten-4'>
                                    <MDBCardBody cascade className='text-center'>
                                        <MDBCardTitle>
                                            <img data-test="card-image" src="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg" className="img-fluid" />
                                            <strong>Car <span style={{ color: '#e39906' }}>€3000</span></strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            Animations, colours, shadows, skins and many more!
                                            Get to know all our css styles in one place.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                                <MDBCard cascade className='my-3 grey lighten-4'>
                                    <MDBCardBody cascade className='text-center'>
                                        <MDBCardTitle>
                                            <img data-test="card-image" src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg" className="img-fluid" />
                                            <strong>Coat <span style={{ color: '#e39906' }}>€30</span></strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            Animations, colours, shadows, skins and many more!
                                            Get to know all our css styles in one place.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                                <MDBCard cascade className='my-3 grey lighten-4'>
                                    <MDBCardBody cascade className='text-center'>
                                        <MDBCardTitle>
                                            <img data-test="card-image" src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg" className="img-fluid" />
                                            <strong>Jacket <span style={{ color: '#e39906' }}>€30</span></strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            Animations, colours, shadows, skins and many more!
                                            Get to know all our css styles in one place.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>

                        <MDBCol md='4'>
                            <MDBAnimation reveal type='fadeInLeft'>
                                <MDBCard cascade className='my-3 grey lighten-4'>
                                    <MDBCardBody cascade className='text-center'>
                                        <MDBCardTitle>
                                            <img data-test="card-image" src="https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg" className="img-fluid" />
                                            <strong>Jeans <span style={{ color: '#e39906' }}>€30</span></strong>
                                        </MDBCardTitle>
                                        <MDBCardText>
                                            Animations, colours, shadows, skins and many more!
                                            Get to know all our css styles in one place.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBAnimation>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
