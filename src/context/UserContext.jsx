//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextUser = createContext();

const getUsersData = async () => {
    try {
        const url = "/users.json"
        const response = await fetch(url)
        const usersData = await response.json()
        return usersData;
    }
    catch (error) {
        console.log(error)
    }
}

const initialStateUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

export function UserContext({ children }) {
    const [user, setUser] = useState(initialStateUser)
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [profileImg, setProfileImg] = useState("/imgs/User_Profile_Img_00.png");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser && user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else if (storedUser && !user) {
            localStorage.removeItem("user");
        } else if (storedUser && user) {
            localStorage.setItem("user", JSON.stringify(user));
        }
    }, [user]);
   
    const logIn = async (userEmail, userPassword) => {

        const users = await getUsersData()
        console.log("JSON users registrados: ")
        console.log(users)
        const userDB = users.find(
            (item) => item.email === userEmail && item.password === userPassword
        );
        if (userDB) {
            console.log("usuario encontrado: ");
            console.log(userDB);
            setUser(userDB);
        } else {
            setUser(null)
            console.log("usuario no encontrado -----");
        }
        return userDB;
    }

    const logOut = async () => {
        setId("")
        setName("")
        setEmail("")
        setPassword("")
        setPasswordRepeat("")
        setProfileImg("/imgs/User_Profile_Img_00.png")
        console.log("userStates cleaned")
        setUser(null)
        console.log("user logOut.")
    }

    const compararInfoUsuarLogIn = async (email, password, setEmailError, setPasswordError) => {
        try {
            const usersData = await getUsersData()
            console.log(usersData)
            const user = usersData[1];

            if (email !== user.email) {
                alert("Error de datos de email.");
                setEmailError(true);

            } if (email === user.email) {
                setEmailError(false);
            }

            if (password !== user.password) {
                alert("Error de datos de contraseña.");
                setPasswordError(true);
            }

            else if (password === user.password) {
                setPasswordError(false);
            }

        } catch (error) {
            console.log(error);
        }
    };
    
    const register = async (user) => {
        setUser(user)
    }

    const editProfile = async (user) => {
        setUser(user)
    }

    return <ContextUser.Provider value={{
        user,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordRepeat,
        setPasswordRepeat,
        profileImg,
        setProfileImg,
        logIn,
        logOut,
        compararInfoUsuarLogIn,
        register,
        editProfile,
    }}>{children}</ContextUser.Provider>
}