
interface ButtonProps {


    title: string,
    size: 'sm'| "md"|"lg" ,
    color: "purple"| "white" | "black"
    width: "bold"| "medium"| "light"
}

const defaultStyles = "text-center border-2 border-black cursor-pointer"


const widthStyles = {
    "bold": "Font-bold",
    "medium": "font",
    "light": "font-light"
}

const sizeStyles = {
    "sm": "py-3 px-10 rounded-4xl ",
    "md": "py-3 px-14 rounded-4xl text-lg",
    "lg": "py-3 px-16 rounded-4xl text-2xl"

}

const colorStyles = {
    "white": "bg-white text-black",
    "black": "bg-black text-white",
    "purple": "bg-purple-500 text-white"

}

export default function Button(props: ButtonProps) {
    return <div   >
        <button className={`${sizeStyles[props.size]} ${colorStyles[props.color]} ${widthStyles[props.width]}  ${defaultStyles}`}> {props.title} </button>
    </div>
}