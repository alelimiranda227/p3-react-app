import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 


const Login = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true); 
        // console.log(setIsLoggedIn);
        console.log("Credential", email, password);

        navigate('/');
    }

    return (
        <div className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-slate-50
                bg-lcct-pic h-screen bg-cover bg-center"
        >
            <div className="
                    max-w-md
                    w-full
                    bg-white
                    p-8
                    rounded-lg
                    shadow-md"
            >
                <h1 className="text-2xl font-bold mb-6 text-gray-800">User Authentication</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                        >Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                                w-full
                                p-2
                                border
                                border-gray-300
                                "
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                        >Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                            className="
                                w-full
                                p-2
                                border
                                border-gray-300
                                "
                        />
                    </div>

                    <button
                        className="
                            w-full
                            bg-blue-500
                            text-white
                            p-3
                            hover:bg-blue-400
                            rounded-md
                            "
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
