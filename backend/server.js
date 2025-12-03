const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend is running" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
