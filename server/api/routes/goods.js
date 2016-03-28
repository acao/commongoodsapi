'use strict';

import Good from '../../models/user';
import { isBearerAuthenticated } from '../../auth';

export default (router) => {
  router
    .get('/goods',
      async ctx => ctx.body = await Good.find({}))
    .post('/goods', async ctx => {
      ctx.body = await Good.create({
        name: ctx.request.body.name,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
        confirm_password: ctx.request.body.confirm_password,
      });
    })
    .get('/goods/:id',
      async ctx => {
        const user = await Good.findById(ctx.params.id);
        if (user) ctx.body = user;
      }
    )
    .put('/goods/:id', async ctx => {
      const user = await Good.findByIdAndUpdate(ctx.params.id, {
        name: ctx.request.body.name,
      }, {
        new: true,
        runValidators: true,
      });
      if (user) ctx.body = user;
    })
    .delete('/goods/:id',
      isBearerAuthenticated(),
      async ctx => {
        const user = await Good.findByIdAndRemove(ctx.params.id);
        if (user) ctx.status = 204;
      }
    );
};
