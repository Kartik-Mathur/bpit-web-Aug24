
# Creating a Custom useState Hook: `useMyState`

In this guide, we will create a custom implementation of React's `useState` hook, called `useMyState`. This custom hook will mimic the behavior of `useState` but can be extended to include additional functionality.

---

## Basic Implementation of `useMyState`

Here’s how you can create a basic version of `useMyState`:

```javascript
import React, { useState } from "react";

function useMyState(initialValue) {
    // Use React's built-in useState under the hood
    const [state, setState] = useState(initialValue);

    // Return the state and a function to update it
    return [state, setState];
}
```

### How to Use `useMyState`

```javascript
import React from "react";
import useMyState from "./useMyState"; // Import your custom hook

function Counter() {
    // Use the custom hook instead of useState
    const [count, setCount] = useMyState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
```

---

## Explanation

1. **Custom Hook Definition**:
   - `useMyState` is a wrapper around React’s `useState` that directly passes through the `state` and `setState` values.

2. **Usage**:
   - Replace `useState` with `useMyState` in your functional component.
   - `useMyState` works exactly like `useState` but adds a layer of abstraction, which can be enhanced further.

---

## Advanced Version: Adding Custom Logic to `useMyState`

Here’s an enhanced version of `useMyState` that includes additional functionality, such as logging state updates and preventing redundant updates:

```javascript
import React, { useState } from "react";

function useMyState(initialValue) {
    const [state, setState] = useState(initialValue);

    // Custom setter to add extra functionality
    const customSetState = (newValue) => {
        console.log("Previous State:", state);
        console.log("New State:", newValue);

        // Only update if the new value is different
        if (newValue !== state) {
            setState(newValue);
        }
    };

    return [state, customSetState];
}
```

---

### Using Enhanced `useMyState`

```javascript
import React from "react";
import useMyState from "./useMyState";

function Counter() {
    const [count, setCount] = useMyState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
```

---

## Key Features of `useMyState`

1. **State Management**:
   - Uses React’s `useState` to manage state internally.

2. **Custom Behavior**:
   - Adds logging and prevents redundant updates in the enhanced version.

3. **Reusability**:
   - Encapsulates custom logic into a reusable hook for multiple components.

---

## Why Use Custom Hooks?

- **Encapsulation**:
  - Group related logic into a single reusable hook.

- **Extensibility**:
  - Add custom behavior (e.g., logging, validations, or side-effects) without modifying component code.

- **Simplified Components**:
  - Move complex logic into the hook, keeping component code clean and focused on rendering.

---

This example demonstrates how you can build a custom hook like `useMyState` while leveraging React’s `useState` and extending its functionality as needed!
