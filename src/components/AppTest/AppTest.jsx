//css
import { Context } from '../../MyContext';
import { ContextUser } from '../../UserContext';

import './AppTest.css'

//components
import { useContext } from "react";

export default function AppTest() {

    // const user = useContext(UserContext);
    // const { cartAmount, user } = useContext(Context);
    const { cartAmount} = useContext(Context);
    const { user } = useContext(ContextUser);
    console.log(user)
    console.log(user.name)
    // console.log(user.user);
    return (
        <h1>{cartAmount}</h1>
    )
}