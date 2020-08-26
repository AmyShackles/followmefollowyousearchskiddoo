const express = require('express');
const PORT = process.env.PORT || 5000;
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

