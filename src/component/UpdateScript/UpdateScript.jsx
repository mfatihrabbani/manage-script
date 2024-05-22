import { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"

function UpdateScript(props){
  const [nameScript, setNameScript] = useState("")
  const handleOnClickUpdate = async (event) => {
    event.preventDefault()
    let data = props.data
    data.script_name = nameScript
    console.log(data)
    await fetch(localStorage.getItem("domain") + "/script", {
      method : "PATCH",
      body : JSON.stringify(props.data),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': ''
      },
  })
  props.onHide(true)
  }

  const handleInputNewScriptName = (event) => {
    console.log(nameScript)
    setNameScript(event.target.value)    
  }
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Info Script
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form  onSubmit={handleOnClickUpdate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Script Id</Form.Label>
                    <Form.Control type="tetx" placeholder="ID" value={props.data.id_script} disabled/>
                    <Form.Text className="text-muted">
                        Id script
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Script Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" defaultValue={props.data.script_name} onChange={handleInputNewScriptName} />
                    <Form.Text className="text-muted">
                        Set new script name
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default UpdateScript