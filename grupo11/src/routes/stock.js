const KoaRouter = require('koa-router');
const request = require('request-promise');
const router = new KoaRouter();
var crypto    = require('crypto');
require('dotenv').config();

function hashHCMA (method, almacenId){
  var text = method + almacenId
  console.log(text)
  hmac = crypto.createHmac("sha1", process.env.Clave_Privada);
  hmac.update(text);
  var hash = hmac.digest('base64')

  return hash
}

router.get('stock', '/', async (ctx) => {
  const options = {
    method: 'Get',
    uri: 'http://integracion-2020-dev.herokuapp.com/bodega/almacenes',
    json: true,
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'INTEGRACION grupo11:' + hashHCMA("GET", "")
    }
  }

  request(options).then(function (response){
      console.log(response);
      ctx.body.almacenes = response
      });
  })
  .catch(function (err) {
      console.log(err);
  })

});

module.exports = router;
