const express = required('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Schedule Claudemir");
});

app.listen(3001);