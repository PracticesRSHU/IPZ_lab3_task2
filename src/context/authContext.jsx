import { createContext, useState } from "react";

// export const AuthContext=createContext({
//     userName:"",
//     email:"",
//     setUserName:()=>null,
//     clearUserName: ()=>null,
// }); 
export const AuthContext=createContext(null); 


/*
 Наступний компонент AuthProvider, що  має наведену нижче конструкцію створення контексту 
 прийнято іменувати композицією,  яка є альтернативою механізму звичайного наслідування. 
 React пропонує застосовувати дану модель у компонентах, які не можуть заздалегідь знати своїх нащадків. 
 Випадок, який розглянуто, саме такий — компонент AuthProvider являє собою своєрідну «коробку»,
 куди буде поміщено весь додаток. children — це спеціальний prop, який дозволяє передати підпорядковані
 елементи одразу на рендер. Це дозволяє передати компоненту довільні підпорядковані елементи, 
 одразу розмістивши їх у JSX.  Тобто все, що буде знаходиться всередині JSX-тегу <AuthProvider>, 
 передається всередину компонента CounterProvider через prop children. 
 Оскільки AuthProvider здійснює рендер {props.children} всередині <div>, 
 всі передані елементи відображаються в кінцевому виведенні.
*/

export default function AuthProvider(props){
    const [userName, setUserName]=useState();
    const [email, setEmail]=useState();
    const clearUserName=()=>setUserName("");
    const value={userName, setUserName,email, setEmail,clearUserName}
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}