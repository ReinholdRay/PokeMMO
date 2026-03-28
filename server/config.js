/**
 * Window title
 * @type {String}
 */
export let TITLE = "Server";

/**
 * Maximum connections
 * @type {Number}
 */
export let MAX_CONNECTIONS = 64;

/**
 * Connection port
 * @constant
 * @type {Number}
 */
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3002;

/**
 * Server mode
 * @constant
 * @type {Number}
 */
export const MODE = 0;

/**
 * Log level
 * @constant
 * @type {Number}
 */
export const LOG_LEVEL = 1;