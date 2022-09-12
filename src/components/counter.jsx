import React, {useState} from "react"

const Counter = (props) => {
    // console.log(props.value)
    const [value, setValue] = useState(props.value)

    const getCounter = () => {
        return value===0 ? 'empty' : value
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 pb-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }

    const handleIncrement = () => {
        setValue((prevState)=>prevState+1)
        
    }

    const handleDecrement = () => {
        setValue((prevState)=>prevState-1)
    }

    return (
        
    <div>  
        <span className={getBadgeClasses()}>{getCounter()}</span>
        <button className="btn btn-primary btn-sm m-2 " onClick={handleIncrement}>+</button>
        <button className="btn btn-primary btn-sm m-2 " onClick={handleDecrement}>-</button>
    </div>
    )

}

export default Counter