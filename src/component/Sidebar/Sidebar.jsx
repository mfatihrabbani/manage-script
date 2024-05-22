import "./Sidebar.css"

function Sidebar({change}){
    return (
        <>
            <div class="sidebar">
            <div class="sidebar-item" onClick={() => {
                    change("data")
                }}>
                    &#128185; Data
                </div>
                <div class="sidebar-item" onClick={() => {
                    change("script")
                }}>
                    &#128220; Script
                </div>
                <div class="sidebar-item" onClick={() => {
                    change("users")
                }}>
                    &#128101; Users
                </div>
                <div class="sidebar-item" onClick={() => {
                    change("role")
                }}>
                    &#128206; Role
                </div>
                <div class="sidebar-item" onClick={() => {
                    change("configuration")
                }}>
                    &#128190; Configuration
                </div>
            </div>
        </>
    )
}

export default Sidebar