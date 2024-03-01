const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com"
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alice.williams@example.com"
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com"
  }
];
app.get("/", (req, res) => {
  res.send("User Management Server Running");
});

app.get("/users", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is Running ${port}`);
});
