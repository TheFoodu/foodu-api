module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASS
        },
        migrations: {
            directory: "./db/migrations"
        },
        seeds: {
            directory: "./db/seeds/dev"
        },
        useNullAsDefault: true
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./db/migrations"
        },
        seeds: {
            directory: "./db/seeds/production"
        },
        useNullAsDefault: true
    }
};