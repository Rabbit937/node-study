import headerRouter from './headers.js'
import responseRouter from './response.js'
import demoRouter from './router-demo.js'
import mountMethodDemo from './method.js'
import restfulRouter from './restful.js'
import uploadRouter from './upload.js'

// const routers = [headerRouter, responseRouter, demoRouter]

export default function mountRouters(app) {
    mountMethodDemo(app);

    // app.use(routers)

    app.use(uploadRouter)

    app.use('/demo', demoRouter)

    app.use('/api', restfulRouter)

    app.get('/hello/:id', (req, res) => {
        const { params } = req;
        console.log('params', params);
        res.json(params);
    })

    app.get('/hello', (req, res) => {
        res.send('<h1>Hello Express</h1>')
    })
}