import express from "express"
import morgan from "morgan";

const PORT = 4000;
const app = express();

const logger = morgan("common");

const home = (req, res, next) => {
    console.log("hello");
    return res.send("hello?");
};

const login = (req, res, next) => {
    return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`);
app.listen(4000, handleListening);