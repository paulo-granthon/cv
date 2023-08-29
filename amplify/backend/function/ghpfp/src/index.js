const aws = require('aws-sdk');
const axios = require('axios');

/**
@type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const GITHUB_API_BASE_URL = 'https://api.github.com';

    const { Parameters } = await (new aws.SSM())
        .getParameters({
            Names: ["GITHUB_USERNAME", "GITHUB_TOKEN"].map(secretName => process.env[secretName]),
            WithDecryption: true,
        })
        .promise();

    const githubToken = Parameters[0].Value;
    const githubUsername = Parameters[1].Value;

    if (!githubUsername || !githubToken) {
        console.error('GitHub username or token not found in environment variables.');
        return {
            StatusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('ghfetchpfp -- Error: Couldn\'t fetch github profile picture')
        }
    }

    return await axios.get(`${GITHUB_API_BASE_URL}/users/${githubUsername}`, {
        headers: {
            Authorization: `token ${githubToken}`,
        },
    }).then(response => {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(response.data.avatar_url),
        };

    }).catch(error=>{
        return {
            StatusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Bro...\t', error)
        }
    });
};
