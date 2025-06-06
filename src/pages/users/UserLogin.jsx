import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../context/authContext";
const UserLogin = () => {
    const {setUserName, setEmail}=useContext(AuthContext)
    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                userName: '',
                email: '',
                password: ''
            }
        }
    );

    const onSubmit = (userData) => {
        console.log(userData);
        setUserName(userData.userName);
        setEmail(userData.email);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="container-input">
                <label> UserName:
                    <input {...register("userName")} />
                </label>
            </div>
            <div className="container-input">
                <label>email:
                    <input {...register("email")} type="email" />
                </label>
            </div>
            <div className="container-input">
                <label>password:
                    <input {...register("password")} type="password" />
                </label>
            </div>
            <div className="container-button">
                <input type="submit" value="Login" />
            </div>
        </form >
    );
}
export default UserLogin;