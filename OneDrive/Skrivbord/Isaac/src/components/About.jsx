import { Card, Container } from "react-bootstrap"

function About() {
  return (
    <Container className="mt-4"> {/* mt-4 adds margin on top */}
      <h1>About Us</h1>
      <Card style={{ backgroundColor: 'slategray', border: 'none' }} className="p-3 mb-3">
      <p className="SmallText">Owner: Isaac Lindberg</p>
      <p className="SmallText">
        Welcome to MewStore, your one-stop destination for all things feline! 
        We are passionate about cats and dedicated to providing you with the best 
        products and information to help you care for your furry friends...
      </p>
      </Card>
    </Container>
  )
}

export default About