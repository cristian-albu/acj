import React from "react";
import HomeView from "./HomeView";
import List from "@/shared/list/List";

const Home = () => {
    return (
        <div>
            <HomeView />
            <List
                data={[
                    { id: "1", label: "First" },
                    { id: "2", label: "second" },
                ]}
            />
        </div>
    );
};

export default Home;
