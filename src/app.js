

// Creating Server
const startServer = () =>{
    const  app = require('./server')();
    const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
    console.log(`Click here is visit: http://localhost:${port}`);
    });
}
startServer()

