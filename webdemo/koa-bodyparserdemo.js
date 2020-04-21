'use strict';

const Koa = require('koa');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);// 打印URL
    await next();// 调用下一个middleware
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
                            <form action="/signin" method="post">
                                <p>Name:<input name="name" value="koa"></p>
                                <p>Password:<input name="password" type="password"></p>
                                <p><input type="submit" value="Submit"></p>
                            </form>`;
});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name:${name},password:${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcom,${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
                            <p><a href="/">Try again</a></p>`;
    }
});

app.use(bodyParser());
app.use(router.routes());

app.use(async (ctx, next) => {
    const start = new Date().getTime();//当前时间
    await next();//调用下一个middleware
    const ms = new Date().getTime() - start;//耗费时间
    console.log(`Time: ${ms} ms`);
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,koa2!</h1>'
});

app.listen(3000);
console.log('app started at port 3000...');

