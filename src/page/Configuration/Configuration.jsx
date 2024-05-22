import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Configuration(){
    const [inputPrivateKey, setInputPrivateKey] = useState("")
    const [inputDomainHost, setInputDomainhost] = useState("")

    useEffect(() => {
        const privateKey = localStorage.getItem("private-key")
        const domain = localStorage.getItem("domain")
        console.log(privateKey)
        console.log(domain)
        if (privateKey !== null){
            setInputPrivateKey(privateKey)
        }
        if (domain !== null){
            setInputDomainhost(domain)
        }
    }, [])

    function handleUpdateConfiguration(event){
        event.preventDefault()
        localStorage.setItem("private-key", inputPrivateKey)
        localStorage.setItem("domain", inputDomainHost)
    }

    return (
        <>
            <h1>&#128190;  Configuration</h1>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label><b>Set Your Private Key</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Private Key" defaultValue={inputPrivateKey} onChange={(event) => {
                                setInputPrivateKey(event.target.value)
                            }}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label><b>Set Your Domain or IP</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Private Key" defaultValue={inputDomainHost} onChange={(event) => {
                                setInputDomainhost(event.target.value)
                            }}></Form.Control>
                            <Form.Text>Example : https://192.168.20.1:3000 or http://mydomain.xyz</Form.Text>
                        </Form.Group>
                        <Button type="submit" onClick={handleUpdateConfiguration} variant="secondary">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Configuration