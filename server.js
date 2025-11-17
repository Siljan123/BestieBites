import express from "express";
const app = express();

app.use(express.static("public")); // folder with your HTML files

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});