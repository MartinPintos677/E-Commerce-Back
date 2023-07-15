require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const methodOverride = require("method-override");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

//app.use(cors());
const corsOptions = {
  origin: "https://admin-front-topaz.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200, // Algunas versiones de CORS requieren esto para que funcione correctamente
};

app.use(cors(corsOptions));

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
