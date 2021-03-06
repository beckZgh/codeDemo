'use strict';

exports.keys = '123456';

exports.data = [];

exports.tracer = {
    getUser(ctx) {
        return ctx.session.user || '';
    },

    getIp(ctx) {
        if (ctx.app.config.proxy && ctx.request.ips) {
            return ctx.request.ips;
        }
    },

    async save(ctx, data) {
        if (ctx.model && ctx.model.Tracer) {
            return await ctx.model.Tracer.create(data);
        }
    },

    async auth(ctx) {
        return true;
    },

    async getData(ctx) {
        if (ctx.model && ctx.model.Tracer) {
            return await ctx.model.Tracer.findAll();
        }

        return [];
    },

    pathUrl: '/tracer/_report'
}
