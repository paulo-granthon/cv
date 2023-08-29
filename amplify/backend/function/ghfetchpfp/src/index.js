/*
Use the following code to retrieve configured secrets from SSM:
*/
// const axios = require('axios');
// const aws = require('aws-sdk');

/*
Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    return {
        StatusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify('helloooooooooooooooooooooooooo')
    }
    // const GITHUB_API_BASE_URL = 'https://api.github.com';
    //
    // const { Parameters } = await (new aws.SSM()).getParameters({
    //     Names: ["GITHUB_TOKEN", "GITHUB_USERNAME"].map(secretName => process.env[secretName]),
    //     WithDecryption: true,
    // }).promise();
    //
    // try {
    //     const githubToken = Parameters[0].Value;
    //     const githubUsername = Parameters[1].Value;
    //
    //     if (!githubUsername || !githubToken) {
    //         console.error('GitHub username or token not found in environment variables.');
    //         return {
    //             StatusCode: 500,
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Access-Control-Allow-Headers": "*"
    //             },
    //             body: JSON.stringify('ghfetchpfp -- Error: Couldn\'t fetch github profile picture')
    //         }
    //     }
    //
    //     return await axios.get(`${GITHUB_API_BASE_URL}/users/${githubUsername}`, {
    //         headers: {
    //             Authorization: `token ${githubToken}`,
    //         },
    //     }).then(response => {
    //         return {
    //             statusCode: 200,
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Access-Control-Allow-Headers": "*"
    //             },
    //             body: response.data.avatar_url,
    //         };
    //
    //     }).catch(error=>{
    //         return {
    //             StatusCode: 418,
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Access-Control-Allow-Headers": "*"
    //             },
    //             body: JSON.stringify('Bro...\t', error)
    //         }
    //     });
    // } catch (error) {
    //     return {
    //         StatusCode: 503,
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Headers": "*"
    //         },
    //         body: JSON.stringify('ghfetchpfp -- Error: Couldn\'t fetch github profile picture:', error)
    //     }
    //
    // }
};
