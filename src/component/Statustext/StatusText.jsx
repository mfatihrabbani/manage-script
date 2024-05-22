function Statustext({active}){
    return (
        <>
        {
            active ? 
                <p style={{color : "#7CFC00"}}>Active</p> : 
                <p style={{color : "#DC143C"}}>Non active</p>
        }
        </>
    )

}

export default Statustext