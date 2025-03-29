"use client"

interface ProfileProps {
    onClick : () => void;
    size: "sm"|"md" |"lg"
}

const sizeStyles = {
    "sm" : "p-2 rounded-full",
    'md': "p-3 rounded-full bg-purple-800",
    "lg": "p-4 rounded-full"
}



export default function Profile(props: ProfileProps) {
    return <div className={`${sizeStyles[props.size]}`}> 

    </div>
}