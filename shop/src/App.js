import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import data from './Routes/data.js'
import Detail from './Routes/Detail.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="Main">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>HOME</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>
              <Card shoes={shoes[0]} i={1}></Card>
              <Card shoes={shoes[1]} i={2}></Card>
              <Card shoes={shoes[2]} i={3}></Card>
            </div>
          </div>
          </>
        }></Route>
        <Route path='/detail' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

function Card(props){
  return (
    <div className='col-md-4'>
        <img src={process.env.PUBLIC_URL + '/shoe'+props.i+'.png'} width="70%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;