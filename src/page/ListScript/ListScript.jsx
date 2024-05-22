import { useEffect, useState } from "react"
import "./ListScript.css"
import { Button, Card, DropdownButton, Dropdown, Table } from "react-bootstrap"
import UpdateScript from "../../component/UpdateScript/UpdateScript"

function ListScript(){
    const [listScript, setListScript] = useState([])
    const [trigger, setTrrigger] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectedScript, setSelectedScript] = useState({})

    useEffect(() => {
        async function getData(){
            try{
                const response = await fetch(localStorage.getItem("domain") + "/scripts")
                console.log(response)
                const data = await response.json()
                setListScript(data.data)
            }catch(error){
                console.log(error)
            }
        }
        getData()
    }, [trigger])

    async function handleSetOnOffStatus(event){
        event.preventDefault()
        let newData = selectedScript
        if (newData.expired){
            newData.expired = false
        }else {
            newData.expired = true
        }
        setSelectedScript(newData)
        await fetch(localStorage.getItem("domain") + "/script", {
            method : "PATCH",
            body : JSON.stringify(selectedScript),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': ''
            },
        })
        setTrrigger(!trigger)
    }

    async function handleModalUpdate(event){
        event.preventDefault()
        setShowModal(true)


        await fetch(localStorage.getItem("domain") + "/script", {
            method : "PATCH",
            body : JSON.stringify(selectedScript),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': ''
            },
        })
    }

    return (
        <>
        <h1>&#128220; List Script</h1>
        <Card>
            <Card body>
                <Table>
                <thead>
                    <tr>
                        <th className="border-bottom">Script Id</th>
                        <th className="border-bottom">Script Name</th>
                        <th className="border-bottom">Status</th>
                        <th className="border-bottom">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listScript.map((script) => {
                            return (
                                <tr className="align-item-center">
                                    <td>{script.id_script}</td>
                                    <td>{script.script_name}</td>
                                    <td>{script.expired.toString()}</td>
                                    <td>
                                        <DropdownButton id="dropdown-basic-button" variant="secondary" title="&#9881;" onClick={() => setSelectedScript(script)}>
                                            <Dropdown.Item onClick={handleSetOnOffStatus}>Set script {
                                                script.expired ? "off" : "on"
                                            }</Dropdown.Item>
                                            <Dropdown.Item onClick={handleModalUpdate}>Update Script</Dropdown.Item>
                                        </DropdownButton>
                                    </td>
                                </tr>
                            )                                
                        })
                    }
                </tbody>
                </Table>
            </Card>
        </Card>
        <UpdateScript show={showModal} onHide={() => setShowModal(false)} data={selectedScript}/>
        </>
    )
}

export default ListScript