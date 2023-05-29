"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// configs
const db_1 = __importDefault(require("./configs/db"));
const initDb_1 = __importDefault(require("./configs/initDb"));
// routes
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
(0, db_1.default)();
(0, initDb_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use((0, cors_1.default)({ origin: true, credentials: true }));
// routes
app.use("/api/users", routes_1.userRouter);
app.use("/api/clinics", routes_1.clinicRouter);
app.use("/api/patients", routes_1.patientRouter);
app.use("/api/products", routes_1.productRouter);
app.use("/api/prescriptions", routes_1.prescriptionRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
