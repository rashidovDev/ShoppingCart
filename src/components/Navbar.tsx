import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { BsCart2 } from 'react-icons/bs';
import { useShoppingCart } from "../context/ShoppingCartContext";


export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <NavbarBs sticky="top" className="nav shadow-sm mb-3 ">
            <Container>
                <Nav className="me-auto p-3">
                    <Nav.Link to="/" as={NavLink} className="text-light">Home</Nav.Link>
                    <Nav.Link to="/about" as={NavLink} className="text-light">About</Nav.Link>
                    <Nav.Link to="/store" as={NavLink} className="text-light">Store</Nav.Link>
                </Nav>
                {
                    <button
                        onClick={openCart}
                        style={{ width: "3rem", height: "3rem", position: "relative" }} className="btn btn-primary rounded-circle">
                        <BsCart2 className="fs-3 text-center" />
                        <div className="rounded-circle bg-light d-flex justify-content-center align-items-center text-danger"
                            style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%,25%)" }}
                        >
                            {cartQuantity}
                        </div>
                    </button>
                }

            </Container>
        </NavbarBs>
    )
}