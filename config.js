const env = process.env;

const config = {
    db: { /* only for demo use */
        host: env.DB_HOST || 'db4free.net',
        user: env.DB_USER || 'adubinina',
        password: env.DB_PASSWORD || 'Qq190615',
        database: env.DB_NAME || 'pl_task',
    },
    service: {
        port: 3000
    }
};

export default config;
