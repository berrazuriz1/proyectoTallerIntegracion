const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const stock = require('./routes/stock');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/stock', stock.routes());

module.exports = router;
