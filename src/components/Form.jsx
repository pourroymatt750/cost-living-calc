import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Label id="city-label">Current City</Form.Label>
        <Form.Control size="lg" id="curr-city-input" type="text" placeholder="Enter Current City" />
        <br />

        <Form.Label id="city-label">New City</Form.Label>
        <Form.Control size="lg" id="new-city-input" type="text" placeholder="Enter New City" />
        <br />

        <Form.Label id="city-label">Income</Form.Label>
        <Form.Control size="lg" id="income-input" type="text" placeholder="Enter New City" />

        <Button id="submit-btn" variant="primary">Primary</Button>{' '}

      </Form.Group>
    </Form>
  );
}

export default InputForm;