// https://www.youtube.com/watch?v=_ee38nL13mE    ---- Build A Social Media Backend REST API With Node.JS(Indian Coders)
import express from 'express';
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

const app = express();
app.use(express.json())
app.use("/api/user", router)
app.use("/api/blog", blogRouter)

app.use("/api", (req, res, next) => {
    res.send("Hello world !")
})

mongoose.connect(
    "mongodb+srv://admin:xr5D3CHO2eKh8wFP@cluster0.ddwwpci.mongodb.net/Blog?retryWrites=true&w=majority"
).then(() => app.listen(5000, () => {
    console.log("Server started on 5000 port.");
    console.log("Connected to MongoDB ");
})).catch((err) => console.log(err))


//xr5D3CHO2eKh8wFP          mongo db password