import {config} from "../configuration.ts"
import { redis } from "../deps.ts";

const REDIS_HOST = config.REDIS_HOST;
const REDIS_PORT = config.REDIS_PORT;

export const redisClient = await redis.connect({
    hostname: REDIS_HOST,
    port: REDIS_PORT
});