"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const populateExcel_controller_1 = require("./fillExcel/populateExcel.controller");
dotenv.config();
class BoltServer {
    constructor() {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            yield this.configDBModels();
            this.server = express();
            this.middleware();
            this.configRoutes();
            this.start();
        });
        this.configDBModels = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose.connect(process.env.DB_ENDPOINT, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    readPreference: "secondaryPreferred",
                    dbName: "bvp",
                    maxPoolSize: 4000
                });
                console.log(`🟢 connected to DB`);
            }
            catch (error) {
                console.log(`🔴 Mongodb Connection error: ${error.message}`);
            }
        });
        this.middleware = () => {
            this.server.use(helmet());
            this.server.use(cors());
            this.server.use(express.json());
        };
        this.configRoutes = () => {
            this.server.post('/fill/excel/', populateExcel_controller_1.populateExcel);
        };
        this.start = () => {
            this.server.listen(process.env.PORT || 3001, () => {
                console.log(`🟢 Server is running on port ${process.env.PORT || 3002}`);
            });
            this.server.get("/", (req, res) => {
                res.send("Hello World! Bharti Vidyapeeth Service ⚡️");
            });
        };
        this.init();
    }
}
exports.default = new BoltServer().server;
