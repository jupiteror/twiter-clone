import {BrowserRouter} from "react-router";
import App from "@/app/App.tsx";


const AppProvider = () => {
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

export default AppProvider