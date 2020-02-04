import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs';
import path from 'path';

import * as React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../app/app';

const PORT = 3000;
const server = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../public/page.html'), { encoding: 'utf-8' });
    const page = html.replace('APP_CONTENT', renderToString(<App/>));
    ctx.body = page;
});

// 静态资源导出，页面打包的js和html
server.use(require('koa-static')(path.join(__dirname, '../../public')));

server.use(router.routes());

server.listen(PORT, () => console.log(`listening on ${PORT}`));