const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config({path: "./env"});
const app = express();
app.use(cors());
app.use(bodyParser.json());

// const authRoutes = require("./routes/auth");
// const resumeRoutes = require("./routes/resume");
// app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
    res.send("ResumeXpress backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));
