"use client"
import {action} from "@/app/action";
import {Button} from "@/app/button";

const Home: () => React.JSX.Element = () => {
    return (
        <form action={action}>
            <Button />
        </form>
    );
};

export default Home;