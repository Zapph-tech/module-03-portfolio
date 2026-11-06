const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Environment variable for database connection
const dbStatus = process.env.DB_STATUS || "Connected to Database";

app.get('/api/health', (req, res) => {
    console.log("Health check endpoint hit"); // Application Logging
    res.json({ status: 'OK', database: dbStatus });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
