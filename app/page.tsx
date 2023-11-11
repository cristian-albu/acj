import React from "react";
import sendMail, { msg } from "@/lib/mail/testEmail";

const Home = () => {
    sendMail(msg);
    return <div>Home</div>;
};

export default Home;
