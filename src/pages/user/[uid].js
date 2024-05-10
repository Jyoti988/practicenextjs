import { useRouter } from "next/router";

const User = () =>{
    const router =  useRouter();
    const {uid} = router.query;
    return(
    <>
    <div> this is User record{uid} </div>

    </>
    )
}
export default User;