import React, { FC } from "react";
import { Container, Form, Navbar } from "react-bootstrap";

type Props ={
    filter:any,
    setFilter:any
}

const GlobalFilter : FC<Props>= ({filter,setFilter}) =>{
    return(
        <Navbar bg="dark">
             <Form className="d-flex me-4">
             <Form.Control placeholder="Search"
          className="me-6" value={filter || ''} onChange={(e)=>setFilter(e.target.value)} />
             </Form>
        </Navbar>
    )
}

export {GlobalFilter}