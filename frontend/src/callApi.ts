import config from "./config.json";

const apiIp = config["api-ip"];
const apiPort = config["api-port"];
const url = `https://${apiIp}:${apiPort}`;
