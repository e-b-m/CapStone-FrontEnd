import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Footer = () => {
    return ( 
    <>
     <MDBFooter bgColor='info' className='text-center text-lg-start text-muted'>

            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>  
                <a href='#' className='text-reset fw-bold mb-4'>Back to top</a>
            </section>

        <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                    <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                        <MDBIcon color='secondary' icon='gem' className='me-3' />
                        © 2023 Orbit
                        </h6>
                        <p>
                            Here at Orbit we want whats best for you and your loved ones. If theres anything we else we can do to help please feel free to get in touch!
                        </p>
                    </MDBCol>

                    <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                        <p>
                        <a href='#!' className='text-reset'>
                            Contact
                        </a>
                        </p>
                        <p>
                        <a href='#!' className='text-reset'>
                            Settings
                        </a>
                        </p>
                        <p>
                        <a href='#!' className='text-reset'>
                            Terms and Conditions
                        </a>
                        </p>
                        <p>
                        <a href='#!' className='text-reset'>
                            Help
                        </a>
                        </p>
                    </MDBCol>

                    <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <p>
                        <MDBIcon color='secondary' icon='home' className='me-2' />
                        80 Middlesex St, London E1 7EZ
                        </p>
                        <p>
                        <MDBIcon color='secondary' icon='envelope' className='me-3' />
                        info@Orbit.com
                        </p>
                        <p>
                        <MDBIcon color='secondary' icon='phone' className='me-3' />
                        020 7197 9902
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}> </div>
    </MDBFooter>
        </> 
    ); 
}
 
export default Footer;