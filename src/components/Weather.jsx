import React, { useState } from 'react';
import "./Weather.css";
import axios from 'axios';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // Initialize as null instead of undefined

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98dc5e28d0b4489662beef4835f0efd7`);
      setWeather(response.data); 
      console.log(response)
    } catch (error) {
      console.log("Error fetching weather data", error);
    }
  };

  return (
    <Container className='bg-warning'>
      <Row>
        <Col className='text-center'>
          <h1>Weather</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Form.Control
            placeholder='Enter The City Name'
            type='text'
            className='input'
            value={city}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Button onClick={handleClick} className="btn">Get Weather</Button>
      </Row>
      {weather && ( <>
                       <Row className='text-center'>
                         <Col>
                           <h3>{weather.name}</h3> {/* Use curly braces to display weather.name */}
                         </Col>
                       </Row>

                       <Row className='text-center'>
                        <Col>
                          <h4>{weather.main.temp}</h4>
                        </Col>
                       </Row>

                       <Row className='text-center'>
                        <Col>
                          <h6>{weather.weather[0].description}</h6>
                        </Col>
                       </Row>

                    </>


      )}
    </Container>
  );
}

export default Weather;
