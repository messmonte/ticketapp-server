const express = require("express");
const cors = require("cors");
const eventRouter = require("./event/router");
const authRouter = require("./auth/router");
const userRouter = require("./user/router");
const ticketRouter = require("./ticket/router");

const app = express();
const corsMiddleware = cors();
const jsonParser = express.json();

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(corsMiddleware);
app.use(jsonParser);
app.use(eventRouter);
app.use(authRouter);
app.use(userRouter);
app.use(ticketRouter);
