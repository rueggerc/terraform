exports.handler = function(event, context, callback) {
    console.log("RUGE INSIDE LAMBDA");
    console.log("Here is Line 2");
    // console.log("Event=" + JSON.stringify(event, null, 2));
    // console.log('Context: ', JSON.stringify(context, null, '\t'));
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;

};