import { Table } from "react-bootstrap"

function Data(){
    return(
        <>
            <h1>&#128185; Data</h1>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Script Name</th>
                        <th>Today Executed</th>
                        <th>Total Executed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Script Science</td>
                        <td>20</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Data