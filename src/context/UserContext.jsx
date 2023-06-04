//components
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const ContextUser = createContext();

// 0) Llamar funcion para traer info de usuarios del json.
// useEffect(() => {
//     getUsersData();
// }, []);

// 1) Realizar llamada al json para obtener info.
const getUsersData = async () => {
    try {
        // Consulta a la API.
        const url = "/users.json"
        const response = await fetch(url)
        const usersData = await response.json()
        // console.log("JSON users data: ")
        // console.log(usersData)
        return usersData;

    }
    catch (error) {
        console.log(error)
    }
}


// ------------------------------------------------------------------
// 3) Usar localStorage para guardar datos de usuario
//setItem = Guardar item con "key" y "string"
// localStorage.setItem("user", "si existe")

//getItem = Acceder item con "key"
// const testStorage = localStorage.getItem("user")
// console.log(testStorage)
// ------------------------------------------------------------------


// ------------------------------------------------------------------
//transformar el STRINGJSON a un ARRAY
// const arraySTRINGJson = '[{"id": 1}, {"name": "Azul"}]' //STRINGJSON inicial
// const array = JSON.parse(arraySTRINGJson) //se transforma a array
// console.log(array[0].id, array[1].name) //se muestra array en consola

//transformar el ARRAY a un STRINGJSON
// const array = [{id: 1, name: "Azul"}] // array inicial
// const arraySTRINGJSON = JSON.stringify(array); //se transforma a STRINGJSON
// console.log(arraySTRINGJSON); //se muestra STRINGJSON en consola
// console.log(array); //se muestra ARRAY inical en consola para comparar
// ------------------------------------------------------------------


// 3) crear initialStateUser para inicializar el usuario
// ¡ SE CREA SIEMPRE FUERA DEL USERCONTEXT !
const initialStateUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")) //si el usuario de la key "user" existe, se transforma el STRINGJSON a array
    : null; //si no existe usuario, el estado inicial de usuario es "null"


export function UserContext({ children }) {
    // const [user, setUser] = useState(null) //estado inicial del usuario = null

    const [user, setUser] = useState(initialStateUser) //si el usuario existe, el estado del user pasa a ser el usuario  inicial (initialStateUser) encontrado.
    // {
    // id: "",
    // name: "",
    // email: "",
    // password: "",
    // profileImg: "",
    // }

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [profileImg, setProfileImg] = useState("/imgs/User_Profile_Img_00.png");


    // ------------------------------------------------------------------
    // Usar useEffect para guardar información del usario (todo la información del usuario)
    // 5) Usar useEffect para estar pendiente de los datos que cambien del usuario "user"
    // useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (!storedUser && user) { // Comprobar si existe el user antes de guardar la variable
    //         localStorage.setItem("user", JSON.stringify(user)); // Guardar "user" en localStorage
    //     } else if (storedUser && !user) {
    //         localStorage.removeItem("user"); // Eliminar el "user" del localStorage si no existe en el estado
    //     }
    // }, [user]);

    //test crear usuario y modificar datos de eprfil
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
    // ------------------------------------------------------------------

    // 5) Guardar email del usuario en el localStore
    // useEffect(() => {

    //     if (user) {
    //         // const { email } = user; // Obtener el email del usuario
    //         // localStorage.setItem("user", JSON.stringify({ email })); // Guardar solo el email en el localStorage
    //         // const { userEmail } = user; // Obtener el email del usuario
    //         localStorage.setItem("user", JSON.stringify({ user })); // Guardar solo el email en el localStorage
    //     } else {
    //         localStorage.removeItem("user");
    //     }
    // }, [user]);



    // 2) Funcion para logIn (se llama en AppLogIn)
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
            // throw new Error("User not found") //generar error en consola si el usuario no se encuentra.
            console.log("usuario no encontrado -----");
        }
        return userDB; //devuelve el usuario encontrado (se llama en AppLogIn)
    }

    // 3) Funcion para logOut
    const logOut = async () => {
        setId("")
        setName("")
        setEmail("")
        setPassword("")
        setPasswordRepeat("")
        setProfileImg("/imgs/User_Profile_Img_00.png")
        console.log("userStates cleaned")
        setUser(null)  //se setea el estado "user" a null.
        console.log("user logOut.")
    }

    // 7) Funcion para comparar información ingresada en el logIn con la del JSON de usuario (se llama en AppLogIn)
    const compararInfoUsuarLogIn = async (email, password, setEmailError, setPasswordError) => {
        try {
            const usersData = await getUsersData()
            console.log(usersData)
            const user = usersData[1]; //info de usuario[0]

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

    // 8) Funcion para register de usuario
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