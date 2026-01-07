import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react";
import axios from "axios";
import { SETTINGS_DETAIL } from "../resources/server_apis";

const WebLayout = ({ children }) => {
    const [websiteData, setWebsiteData] = useState({});

    useEffect(() => {
        const fetchSettings = async () => {
            const response = await axios.get(SETTINGS_DETAIL);
            if (response.data.status == true) {
                response.data.settings[0] && setWebsiteData(response.data.settings[0]);
            }
        }
        fetchSettings();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar websiteData={websiteData}/>
            <div className="flex-1 pt-20 px-4 flex flex-col">
                {children}
            </div>
            <Footer websiteData={websiteData}/>
        </div>
    )
}

export default WebLayout