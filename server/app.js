require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRouter = require('./routes/auth.route');
const taskRoutes = require('./routes/task.route');
const generateSecretKey = require("./generateSecretKey");


const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

const jwtSecretKey = generateSecretKey();
process.env.JWT_SECRET = jwtSecretKey;

// Use Routes

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

app.use('/', authRouter);
app.use('/api', taskRoutes);




app.get("/", (req, res) => {
  console.log("Api");
  res.status(404).json({
    msg: "Node Api",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: "Page not found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
