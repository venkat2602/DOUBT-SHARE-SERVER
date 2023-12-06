import express, { json } from "express";
import cors from "cors";
import studentRoutes from "./src/routes/studentRoutes.js";
import database from "./src/config/database.js";

const app = express();

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use("/api", studentRoutes);

// Sync database models with the database
database
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.get('/api/check-auth', verifyToken, (req, res) => {
//   // If the middleware verifies the token, the user is authenticated
//   res.json({ isAuthenticated: true, user: req.user });
// });
