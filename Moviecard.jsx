import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { Link } from 'react-router-dom';


const Moviecard = () => {
const [data,setData]=useState([''])
const[title,setTitle]=useState([''])

    useEffect(()=>{
        let fetchData= async()=>{
            let response= await axios.get(`https://www.omdbapi.com/?s=lucifer&apikey=a5ef1268`)
            setData(response.data.Search)
            // console.log(response.data.Search)
          }
        fetchData()
    },[])

   let handleChange=(e)=>{
          setTitle(e.target.value)
    }
    let handleSubmit=async ()=>{
      setTitle(title)
      let response= await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
      console.log(response);
      setData(response.data.Search)
      
    }
   



  return (
    <>
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand className='nav-head' href="#">Moodvies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex m-auto ">
            <Form.Control
            onChange={handleChange}
              type="search"
              placeholder="Search Movie"
              className="me-2 nav-search"
              aria-label="Search"

            />
            <Button onClick={handleSubmit} className='search-button' variant="outline-success">Search</Button>
          </Form>
          <Nav>

     <Nav.Link className='text-white ' href="#action1">Login</Nav.Link>
            <Nav.Link className='text-white ' href="#action2">SignUp</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <div className='d-flex flex-wrap '>
      {data.map((item)=>(
  

        <Card style={{ width: '18rem' }}>
        <Link  to={`/details/${item.imdbID}`}><Card.Img className='image-card' variant="top" src= {item.Poster}/></Link>
      <Card.Body>
        <Card.Title>{item.Title}</Card.Title>
        <Card.Text>
          <h3>Year:{item.Year}</h3>
        </Card.Text>
        <Card.Text>
          <h3>Type:{item.Type}</h3>
        </Card.Text>
        
      </Card.Body>
    </Card>
  
          
        ))}
    </div>
    </>
  )
}

export default Moviecard
