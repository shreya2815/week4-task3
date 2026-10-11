const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Week 4 Task 3 - Cloud Deployment",
        status: "Backend is running successfully!"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});