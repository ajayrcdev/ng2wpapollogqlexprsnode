const expressApp = require('./lib/ng2GqlExpressApp');

expressApp.listen(9090, () => {
    console.log('listening on 9090');
});