
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
  
  const Cards = ({ event }) => {
    return (
      <div>
        <MDBCard style={{ maxWidth: '540px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src={event.imageURL} alt={event.name} fluid />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                <MDBCardTitle>{event.name}</MDBCardTitle>
                <MDBCardText>
                  {event.description}
                </MDBCardText>
                <MDBCardText>
                  <small className='text-muted'>
                    Last updated: {event.lastUpdated}
                  </small>
                </MDBCardText>
                <Button><Link to={'/booking'} style={{ textDecoration : 'none' }}>Book Now</Link></Button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    );
  };
  
  export default Cards;
  