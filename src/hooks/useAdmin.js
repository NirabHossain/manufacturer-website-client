import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Url from "../Pages/Shared/Url";

const useAdmin = () =>{
    const user = useAuthState(auth);
    const [admin, setAdmin] = useState(false);
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(Url+`admins?email=${email}`,{
                method: 'GET',
                headers:{'content-type': 'application/json', authorization: `Bearer ${localStorage.getItem('accessToken')}`},
            }).then(res => res.json()).then(data => {
                setAdmin(data[0]?.role==='admin');
            });
        }
    },[user])
    return [admin];
}
export default useAdmin;