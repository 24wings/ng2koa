import koa = require('koa');
import path = require('path');
import bodyparser = require('koa-bodyparser');
import Router = require('koa-router');
import koaStatic = require('koa-static');
import { config } from './config';

import api = require('./api'); 
import fs = require('fs');
import compress =  require('koa-compress');
import gzip = require('koa-gzip');
import zlib =require('zlib');

 
 
var compressConfig={
 filter: function (content_type) {
  	return true;
  },
  threshold: 2048,
  flush: zlib.Z_SYNC_FLUSH
};

var app = new koa();
app.use(compress(compressConfig));
app.use(gzip());
app.use(koaStatic(config.StaticDir));
app.use(koaStatic(path.resolve(__dirname, '../../node_modules')));


// x-response-time
app.use(async (ctx, next) => {
    const start = new Date();
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.status = 200; /让options请求快速返回/
    } 
    else {  
        await next();
    }
    const ms = new Date().getTime() - start.getTime();
    ctx.set('X-Response-time', `${ms.toString()}ms`);
});

app.use(bodyparser());
// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date().getTime() - start.getTime();
    console.log(`${ctx.method} ${ctx.url}----${ms}ms`);
});

var router =new Router();
router.use('/web',api.webRouter.routes());
router.use('/web',api.webRouter.allowedMethods())
app.use(router.routes());
app.use(router.allowedMethods());


app.use(async(ctx,next)=>{ 
   ctx.body = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    
})
app.on('error',(error,ctx)=>{
    ctx.body = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
    
})

app.use(gzip());
app.listen(3000, () => { 
    console.log('server is running on 3000');
});
 
exports = app; 