import { Container, Card } from 'react-bootstrap'

function Contact() {
  return (
    <Container className="mt-4"> {/* mt-4 adds margin on top */}
      <h1>Contact Us</h1>
      <Card style={{ backgroundColor: 'slategray', border: 'none' }} className="p-3 mb-3">
      <p className="SmallText">If you have any questions, please feel free to contact us at:</p>
      <p className="SmallText">- Email: contact@mewstore.com</p>
      <p className="SmallText">- Number: 0760709585</p>
      </Card>
    </Container>
  )
}

export default Contact