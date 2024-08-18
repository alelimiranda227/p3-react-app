import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/");
    }

    return (
        <div
            className="
                min-h-screen
                flex
                flex-col
                items-center
                justify-center
                bg-gray-100
                text-gray-800"
        >
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Page Not Found</p>
            <button
                onClick={gotoHome}
                className="
                    bg-blue-500
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    hover:bg-blue-400"
            >
                Goto HomePage
            </button>
        </div>
    )
}

export default NotFound;
