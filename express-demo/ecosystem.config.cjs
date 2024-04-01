module.exports = {
    apps: [{
        name: 'my-express-app',
        script: 'app.js',
        instances: 1,
        exec_mode: 'cluster',
        watch: true,
        ignore_watch: ["node_modules"],
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};