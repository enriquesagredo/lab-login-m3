const express = require("express");
const logger = require("morgan");

require("./config/db.config");

const app = express();

app.use(express.json());
app.use(logger("dev"));

const sessionConfig = require("./config/session.config");
app.use(sessionConfig.session);

const routes = require("./config/routes.config");
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Application running at port ${PORT}`));
