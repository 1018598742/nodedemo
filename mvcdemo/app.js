const Koa = require('koa');

const app = new Koa();

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

//判断当前环境是否是production环境
const isProduction = process.env.NODE_ENV === 'production';

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(bodyParser());

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));


app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');

