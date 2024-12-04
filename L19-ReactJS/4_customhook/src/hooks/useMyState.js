import React, { useState } from 'react'

const useMyState = (initVal) => {
    // We are using inbuilt useState only, but now we can
    // create our own functionality in this code.
    const [state, setState] = useState(initVal);
    
    // We need to return two things, state and setState
    return [state, setState];
}

export default useMyState
