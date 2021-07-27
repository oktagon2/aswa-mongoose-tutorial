const te = require('tradingeconomics');

te.login();
// data1 = [];
// data = te.getMarketSnap(symbol = 'aapl:us').then(function(data){
//     console.log(data);
//     data1 = data;
// });

//data2 = await te.getMarketSnap(symbol = 'aapl:us');

data3 = {
    counter: 1
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    //const responseMessage = await te.getMarketSnap(symbol = 'aapl:us');
    const responseMessage = await te.getMarketSnap(symbol = 'ndx:ind');
     
    /*
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Sali " + name + "!\nThis HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    */
    context.res = {
        // status: 200, /* Defaults to 200 */
        // body: responseMessage
        body: data3.counter++
    };
}