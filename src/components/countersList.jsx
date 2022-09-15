import React, {useState} from "react";
import Counter from "./counter";

const Counters = () => {

    const initState = [
        {id:0, value:0, name: 'Ненужная вещь'},
        {id:1, value:8, name: 'Вилка'},
        {id:2, value:1, name: 'Ложка'},
        {id:3, value:1, name: 'Тарелка'},
        {id:4, value:1, name: 'Набор минималиста'}
    ]

    const [counters, setCounter] = useState(initState)

    const handleIncrement = (id) => {
        // setCounter(initState=>initState.map(c => {
        //     if (c.id === id) {
        //         c.value += 1
        //     }
        //     return c
        // }))   

        const idState = counters.findIndex(c => c.id===id)
        const newState = [...counters]
        newState[idState].value++
        setCounter(newState)
    }

    const handleDecrement = (id) => {

        // setCounter(initState=>initState.map(c => {
        //     if(c.id===id) {
        //         c.value -= 1
        //     }
        //     return c
        // }))

        const idState = counters.findIndex(c => c.id===id)
        const newState = [...counters]
        newState[idState].value--
        setCounter(newState)
    }

    const handleDelete = (id) => {
        console.log('handle')
        setCounter(counters=>counters.filter(c=> c.id!==id ))

    }

    const handleReset = () => {
        setCounter(initState)
        console.log('handleReset')
    }

    return (
        <>
            {counters.map(count => 
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                >
                </Counter>
            )}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counters