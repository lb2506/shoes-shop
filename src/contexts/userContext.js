import { useEffect, useState } from "react"

const UserContext = () => {

    const [firstName, setFirstName] = useState([])
    const [lastName, setLastName] = useState([])

    useEffect(() => {
        setFirstName(['roro', 'lolo'])
        setLastName(['dada', 'dodo'])
    },[])

    return {firstName, lastName}

}

export default UserContext