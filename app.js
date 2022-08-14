const app = require("express")(); //express must be exectued with () suffix

app.get("/", (req, res) => 
    res.json({ message: "API running ~~~🐳~~~" })
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port ${port}`));
