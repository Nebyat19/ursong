import { useState } from "react"
import { LoginForm } from "../components/LoginForm"
import { SignupForm } from "../components/SignupForm"
import { HeroImage } from "../constants"


export const HomeView = () => {
    const [isSignupForm, setSignupForm] = useState(false);

    const toggleForm = () => {
        setSignupForm(!isSignupForm);
    };

    return (

        <div className="h-[70vh] rounded-lg mt-10  w-[60vw] mx-auto flex justify-center items-center ">
            <div className="flex  justify-between w-full h-full bg-white rounded shadow-md">
                <div className="md:w-1/3 hidden  md:flex relative h-full bg-red-200">
                    <img className="absolute w-ful h-full object-cover inset-0" src={HeroImage} alt="" />
                </div>
                <div className="w-full md:w-2/3 p-8 h-full">
                {isSignupForm ? <SignupForm onChangeForm={toggleForm} /> : <LoginForm onChangeForm={toggleForm} />}
           
                </div>
            </div>
        </div>
    )
}