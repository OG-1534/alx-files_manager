import redis from 'redis';
import { createClient } from 'redis';
import { promisify } from 'util';

/**
 * Class that performs operations using Redis
 */
class RedisClient {
  constructor() {
    this.client = redis.createClient();

    this.client.on('error', (error) => {
      console.log(`Redis client not connected to the server: ${error.message}`);
    });

    this.client.on('connect', () => {
      // console.log('Redis client connected to the server');
    });

    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);
  }

  /**
   * Checks if connection to Redis is a success
   * @return {boolean} true if connection success otherwise false
   */
  isAlive() {
    return this.client.connected;
  }

  /**
   * Asynchronous function get takes key value from Redis 
   * @key {string} key with value to search for in redis
   * @return {string} value stored for key
   */
  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  /**
   * Asynchronous function set key-value pair in Redis
   * @key {string} key to be saved in redis
   * @value {string} value to be asigned to key
   * @duration {number} seconds to store value in Redis
   * @return: no return
   */
  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

  /**
   * Asynchronous function del that removes key from Redis
   * @key {string} key to be deleted
   * @return: no return
   */
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
