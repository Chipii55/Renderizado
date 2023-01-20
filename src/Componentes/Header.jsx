import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'

const Header = ( {setValorDeLaCaja} ) => {

    return (
        <Navbar bg='dark' variant='dark' expand='ls'>
            <Container fluid>
                <Navbar.Brand >Buscador de Colaboradores </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navabarScroll'>
                    <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className='d-flex'>
                        <Form.Control
                            type='text'
                            placeholder='Busca un Colaborador'
                            className='me-2'
                            aria-label='Search'

                            onChange={(e) => setValorDeLaCaja(e.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header