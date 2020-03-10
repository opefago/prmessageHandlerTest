const request = require("request");
console.log("Hello World!");
request({
        json: true,
        headers: {
          'Authorization': 'token ' + process.env.GITHUB_ACCESS_TOKEN,
          'User-Agent': 'prMessage-Bot'
        },
        method: 'POST',
        url: pullRequestUrl + '/labels',
        body: ['bug']
      }, (error, response, body) => {
        if (error) {
          callback(error);
        } else if (response && response.statusCode && !response.statusCode.toString().startsWith('2')) {
          callback(new Error(`GitHub API request failed with status ${response.statusCode}`));
        } else {
          callback(null, {'message': `added label 'bug' to ${pullRequestUrl}`});
        }
      });
