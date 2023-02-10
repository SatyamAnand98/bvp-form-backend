import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import { populateExcel } from "./fillExcel/populateExcel.controller";

dotenv.config();

class BoltServer {
	public server: express.Application;
	private routes: {
		path: string;
		router: express.Router;
		middleware?: any;
	}[];

	constructor() {
		this.init();
	}

	private init = async () => {
		await this.configDBModels();
		this.server = express();
		this.middleware();
		this.configRoutes();
		this.start();
	};

	private configDBModels = async () => {
		try {
			await mongoose.connect(process.env.DB_ENDPOINT as string, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				readPreference: "secondaryPreferred",
				dbName: "bvp",
				maxPoolSize: 4000
			});
			console.log(`🟢 connected to DB`)
        }
        catch(error){
            console.log(`🔴 Mongodb Connection error: ${error.message}`)
        }
	}

	private middleware = () => {
		this.server.use(helmet());
		this.server.use(cors());
		this.server.use(express.json());
	};

	private configRoutes = () => {
		this.server.post('/fill/excel/', populateExcel)
	};

	public start = () => {
		this.server.listen(process.env.PORT || 3001, () => {
			console.log(`🟢 Server is running on port ${process.env.PORT || 3002}`);
		});
		this.server.get("/", (req, res) => {
			res.send("Hello World! Bharti Vidyapeeth Service ⚡️");
		});
	};
}

export default new BoltServer().server;
