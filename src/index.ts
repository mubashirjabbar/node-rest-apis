import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose, { Mongoose } from 'mongoose'
import router from './router'

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => { console.log("server is up") })

const MONGOS_URL = "mongodb+srv://mubashirjabbar97:Mubashir@node-testing-cluster.sux8rcd.mongodb.net/"

mongoose.Promise = Promise
mongoose.connect(MONGOS_URL).then(() => { console.log("connected") })
mongoose.connection.on('error', (error: Error) => console.log(error))

app.use('/', router())

