import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    // console.log("navigate", navigate);


    const [passwordToggle, setPasswordToggle] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data = JSON.parse(localStorage.getItem("userdata"))


    const handleSubmit = (e) => {
        e.preventDefault();

        if (data?.email === email && data?.password === password) {
            alert("Login Successfull");
            navigate("/service")
            localStorage.setItem("auth", JSON.stringify(true))
            setAuth(true)
        } else {
            alert("user not valid")
            navigate("/signup")

        }
    }





    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>
                <form className="space-y-5" onSubmit={handleSubmit} >
                    <div>
                        <label className="block mb-1 text-gray-600">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-600">Password</label>
                        <input
                            type={passwordToggle ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border-black  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button onClick={() => setPasswordToggle(!passwordToggle)}>
                            {passwordToggle ? "Hide" : "Show"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    // onClick={handleSubmit}
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500 cursor-pointer" onClick={() => navigate("/signup")}>
                    Don't have an account? <a href="#" className="text-blue-600">Sign up</a>
                </p>


            </div>
        </div>
    )
}

export default Login