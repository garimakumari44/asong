"use client"
import { RefObject } from "react";

interface InputProps {
    placeholder: string,
    reference?: RefObject<HTMLInputElement>; 

}


export default function Input(props: InputProps) {

    return <div>
    <input placeholder={props.placeholder} ref={props.reference}  type="text" className="py-3 px-14 text-lg  text-gray-400 shadow-xs border rounded-2xl m-2 border-white" />
</div>
}