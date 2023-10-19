const express = require('express')

    const app = express()
    const port = 6969
  
    app.post("/icetea", (req, res) => {
      res.json({
        message: "Ice tea",
    });
  });
    app.get("/icetea", (req, res) => {
      res.json({
        message: "Ice lemon tea",
    });
  });
    app.put("/icetea", (req, res) => {
      res.json({
        message: "Hot lemon tea",
    });
  });
    app.delete("/icetea", (req, res) => {
      res.json({
        message: "Tea's not available",
    });

  });

    const data_users = [
      { id: 1, name: "Dzaky", alamat: "Los Angeles" },
      { id: 2, name: "Dzaka", alamat: "Brooklyn" },
      { id: 3, name: "Dziky", alamat: "Ohio" },
      { id: 4, name: "Dzeko", alamat: "California" },
    ]
    
    app.get("/pengguna", (req, res) => {
      const data = data_users;

      let result = {
          status: 200,
          data: data,
      };

      res.json(result);
  });
  app.get("/pengguna/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
        result = {
        status: 200,
        data: user,
        };
    } else {
        res.status(404).json({ error: "User not found" });
    }
    res.json(result);
});
    app.listen(port,() => console.log(`Server running on port ${port}`))
