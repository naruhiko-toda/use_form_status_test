"use client"
import {useFormStatus} from "react-dom";

export const Button = () => {
    const {pending} = useFormStatus();
    return <button disabled={pending}>hogehoge</button>;
};