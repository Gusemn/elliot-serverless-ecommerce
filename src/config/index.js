const BASE_URL = process.env.BASE_URL;
const ELLIOT_DOMAIN_ID = process.env.ELLIOT_ENV_VARIABLES.split("|")[0];
const ELLIOT_STORE_FRONT_ID = process.env.ELLIOT_ENV_VARIABLES.split("|")[1];
const ELLIOT_STORE_FRONT_NAME = process.env.ELLIOT_ENV_VARIABLES.split("|")[2];
const ELLIOT_API_KEY = process.env.ELLIOT_ENV_VARIABLES.split("|")[3];
const ENVIRONMENT = process.env.ENVIRONMENT;

export {
	BASE_URL,
	ELLIOT_DOMAIN_ID,
	ELLIOT_STORE_FRONT_ID,
	ELLIOT_STORE_FRONT_NAME,
	ELLIOT_API_KEY,
	ENVIRONMENT
};
