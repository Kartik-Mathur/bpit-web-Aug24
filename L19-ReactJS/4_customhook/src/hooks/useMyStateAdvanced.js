import React, { useState } from 'react'

const useMyState = (initVal) => {
    // We are using inbuilt useState only, but now we can
    // create our own functionality in this code.
    const [state, setState] = useState(initVal);

    const customSetState = (newValue) => {
        console.log("previous val: ", state);
        console.log("new val: ", newValue);
        if (newValue !== state && newValue < 10 && newValue > 0) {
            setState(newValue);
        }
    }
    // We need to return two things, state and setState
    return [state, customSetState];
}

export default useMyState
