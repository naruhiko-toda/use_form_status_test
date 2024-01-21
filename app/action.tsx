"use server"
import {redirect} from "next/navigation";

const action = (formData: FormData) => {
    new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
    console.log("hoge")
    console.log(formData)
};
export { action };
