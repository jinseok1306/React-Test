import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button, Container, Offcanvas, NavDropdown, Form, FormControl } from 'react-bootstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">React Test Page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto"
                        >
                            <Nav.Link ><Link to="/" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/ReduxTest" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>ReduxTest</Link></Nav.Link>
                            <NavDropdown title="Team Work" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/TeamWork/List" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>TeamWork List</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Chart" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/Chart/SimpleLineChart" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SimpleLineChart</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/Chart/SimpleAreaChart" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SimpleAreaChart</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/Chart/SimpleBarChart" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SimpleBarChart</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/Chart/LineBarAreaComposedChart" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>LineBarAreaComposedChart</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/Chart/SimpleScatterChart" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SimpleScatterChart</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/Chart/PieChartWithCustomizedLabel" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>PieChartWithCustomizedLabel</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/Chart/SimpleRadarChart" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SimpleRadarChart</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="MUI" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/MUI/AutocompletePage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>Autocomplete Page</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/ButtonPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>Button Page</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/CheckboxPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>Checkbox Page</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/RadioPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>RadioPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/RatingPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>RatingPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/SelectPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SelectPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/SliderPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SliderPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/SwitchPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>SwitchPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/TextFieldPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>TextFieldPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/TransferListPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>TransferListPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/ToggleButtonPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>ToggleButtonPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/AvatarPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>AvatarPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/BadgePage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>BadgePage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/ChipPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>ChipPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/DividerPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>DividerPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/ListPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>ListPage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/TablePage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>TablePage</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/MUI/TooltipPage" style={{ color: 'rgba(0, 0, 0, 0.55)', textDecoration: 'none' }}>TooltipPage</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};


export default Menu;