"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path = require('path');
const port = 3000;
app.use(express_1.default.static(path.join(__dirname, '../../../build')));
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../build/index.html'));
});
app.get('/api', (req, res) => {
    res.send('Hello from the API!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map