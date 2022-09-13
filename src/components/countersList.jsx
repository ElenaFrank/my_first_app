import React from "react";
import Counter from "./counter";

const Counters = () => {
    const counters = [
        {id:0, value:0, name: 'Ненужная вещь'},
        {id:1, value:8, name: 'Вилка'},
        {id:2, value:1, name: 'Ложка'},
        {id:3, value:1, name: 'Тарелка'},
        {id:4, value:1, name: 'Набор минималиста'}
    ]
    return (
        <>
            {counters.map(count => 
                <Counter key={count.id} value={count.value} name={count.name}>
                </Counter>
            )}
        </>
    )
}

export default Counters