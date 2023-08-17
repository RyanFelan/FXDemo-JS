
import * as optimizely from "../../node_modules/@optimizely/optimizely-sdk";
//import optimizely from "npm:@optimizely/optimizely-sdk"

//initialize optimizely
//const optimizely = require('../../node_modules/@optimizely/optimizely-sdk');
let optimizelyClient = optimizely.createInstance({
  sdkKey: 'AA2UVrr5WAEMtvwk466jL',
});
optimizelyClient.onReady().then(() => {
  // optimizelyClient is ready to use, with datafile downloaded from the Optimizely CDN
});

// Provide a timeout in milliseconds - promise will resolve if the datafile still is not available after the timeout
instance.onReady({ timeout: 5000 }).then(result => {
  // Returned Promise is fulfilled with a result object
  console.log(result.success); // true if the instance fetched a datafile and is now ready to use
  console.log(result.reason); // If success is false, reason contains an error message
})