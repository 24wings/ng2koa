import Router = require('koa-router');
import {db} from '../models';

var webRouter = new Router();


/**
 * 
 */
webRouter.get('/visitor',async(ctx,next)=>{
    var {startDt,endDt}=ctx.query;
     var visitors = await  db.visitorModel.find().where('createDt').gt(new Date(startDt).getTime()).lt(new Date(endDt).getTime()).exec();
        ctx.body={ok:true,data:visitors};
});
//报名
webRouter.post('/visitor',async(ctx,next)=>{
    var {name,age,gender,job,fromMsgPlace,comment,phone,createDt} =ctx.request.body;
    var visitor = await new db.visitorModel({name,age,job,fromMsgPlace,gender,comment,phone,createDt}).save();
    ctx.body={ok:true,data:visitor};
});
webRouter.del('/visitor',async(ctx,next)=>{
      var delAction = await db.visitorModel.findByIdAndRemove(ctx.request.body._id);
        ctx.body={ok:true,data:delAction};
})

export {webRouter} 
