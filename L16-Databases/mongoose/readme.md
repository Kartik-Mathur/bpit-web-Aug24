# Mongoose installation
    - npm init -y
    - npm i express 
    - npm install mongoose
    - touch app.js

Let us start the server first

```
    import path from 'path';
    import express from 'express';
    const app = express();
    const PORT = 4444;

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(express.static(path.join(path.resolve(),'public')));


    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    });
```

