import 'bootstrap-icons/font/bootstrap-icons.css';

import { Navbar, Nav, Form } from 'react-bootstrap';

import { } from './Auth';

const Navigation = (props) => {
    return (
        <Navbar bg="primary" expand="md" variant="dark" className="navbar-padding">
            <Navbar.Brand className="mx-2">
                <i className="bi bi-collection-play mx-2" />
                Daje
            </Navbar.Brand>
            
            <Form className="my-2 mx-auto inline" action="#" role="search" aria-label="Quick search">
                <Form.Control type="search" placeholder="Search" aria-label="Search query" />
            </Form>
            
            <Nav className="ms-auto d-flex align-items-center">
                {props.user && props.user.username && (
                    <Navbar.Text className="mx-2 fs-5 text-white">
                        Logged in as: <strong>{props.user.username}</strong>
                    </Navbar.Text>
                )}
                <Form className="mx-2 mt-1">
                    {props.loggedIn ? <LogoutButton logout={props.logout} /> : <LoginButton />}
                </Form>
            </Nav>
        </Navbar>
    );
}

export { Navigation };
