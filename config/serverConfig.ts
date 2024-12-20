import "dotenv/config";


const requiredEnvVariables = [
  'NODE_MODE',
  'PORT'
];

requiredEnvVariables.forEach((envKey) => {
  if (!process.env[envKey]) {
    console.error(`Missing environment variable: ${envKey}`);
    process.exit(1);
  }
});

// const dbConfig = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };

// const jwtConfig = {
//   secret: process.env.JWT_SECRET,
//   expiration: process.env.JWT_EXPIRATION,
// };

const apiConfig = {
  port: process.env.PORT,
  nodeMode: process.env.NODE_MODE,
};

const config = {
  api: apiConfig
};

export default config;
