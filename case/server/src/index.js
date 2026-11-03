import {connectDb} from './config/db.js';import {app} from './app.js';
const port=process.env.PORT||5000;await connectDb();app.listen(port,()=>console.info(`API listening on http://localhost:${port}`));
