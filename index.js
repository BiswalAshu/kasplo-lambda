exports.handler = async (event) => {
    console.log('Hello from Lambda!');
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Ashutosh!'),
    };
    return response;
};