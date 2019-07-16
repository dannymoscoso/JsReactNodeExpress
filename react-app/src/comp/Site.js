import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

var colstyle = {
  textAlign: "center"
};

function Site() {
  return (
    <>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.bugatti.com/fileadmin/_processed_/sei/nav/se-image-16960bf475fe8f850901f418a3eb215a.jpg"
              alt="First slide"
              width="100%"
              height="400px"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-38cac1f0eba054d814e839a630f7f7fc.jpg?text=First slide&bg=373940"
              alt="Third slide"
              width="100%"
              height="400px"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.bugatti.com/fileadmin/_processed_/sei/nav/se-image-16960bf475fe8f850901f418a3eb215a.jpg"
              alt="First slide"
              width="100%"
              height="400px"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row>
          <Col style={colstyle}>
            <Image
              src="https://www.extremetech.com/g00/3_c-3ccc.kdzx78kskzkin.ius_/c-3SUXKVNKAY9x24nzzvyx3ax2fx2fccc.kdzx78kskzkin.iusx2fcv-iutzktzx2favrugjyx2f8674x2f61x2fTU-Zkyrg-V766J-rklz-lx78utz-yojk-8-324d081.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$"
              roundedCircle
              width="186px"
            />
            <h1>1</h1>
          </Col>
          <Col style={colstyle}>
            <Image src="holder.js/171x180" roundedCircle />
            <h1>1</h1>
          </Col>
          <Col style={colstyle}>
            <Image src="holder.js/171x180" roundedCircle />
            <h1>1</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Site;
