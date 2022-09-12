import React from "react";
import Counter from "./counter";

const Counters = () => {
    const counters = [
        {id:0, value:0},
        {id:1, value:8},
        {id:2, value:1}
    ]
    return (
        <>
            {counters.map(count => <Counter key={count.id} value={count.value}/>)}
        </>
    )
}

export default Counters