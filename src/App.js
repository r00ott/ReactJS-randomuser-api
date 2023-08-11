import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Row, Col } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const [details, setDetails] = useState({});

  const fetchFromAPI = async () => {
    const { data } = await Axios.get('https://randomuser.me/api/')
    console.log(data)
    const react.js 
    console.log(data)
    
    class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 10 };
  }
    this.interval = setInterval ()
    }
    const details = data.results[0]
    setDetails(details)
  }
  

  useEffect(() => {
    fetchFromAPI()
  }, [])

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <ProfileCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
