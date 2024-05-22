import { useState } from "react"
import CardScript from "../component/CardScript/CardScript"
import Topbar from "../component/Topbar/Topbar"
import Sidebar from "../component/Sidebar/Sidebar"
import ListScript from "./ListScript/ListScript"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./Dashboard.css"
import Configuration from "./Configuration/Configuration"
import Data from "./Data/Data"
import UserList from "./UserList/UserList"


function Dashboard() {
    const [currentPage, setCurrentPage] = useState("script")

    function CenterPage(){
        if(currentPage == "script"){
            return <ListScript/>
        }else if(currentPage == "users"){
            return (
                <>
                    <UserList/>
                </>
            )
        }else if(currentPage == "data"){
            return (
                <>
                    <Data/>
                </>
            )
        }else if(currentPage == "configuration"){
            return <Configuration/>
        }else if(currentPage == "role"){
            return (<>INI ROLE</>)
        }
    }

    function handleCenterPage(page){
        setCurrentPage(page)
    }

    return (
        <>
        <div class="top-page">
            <div class="dashboard">
                <h1> Dashboard</h1>
            </div>

        </div>
            <div class="page-style">
                <div class="right-page">
                    <Sidebar change={handleCenterPage}/>
                </div>
                <div class="center-page">
                    <CenterPage/>
                </div>
            </div>
        </>
    )
}

export default Dashboard