
var input = process.argv.slice(2);

const fetcher = function (URl, filepath) {

  const request = require('request');

  request(URl, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const fs = require('fs')

const content = body

fs.writeFile(filepath, content, err => {
  if (err) {
    console.error(err)
    return
  }

  let Bytes = content.length
  console.log(`Downloaded and saved ${Bytes} bytes to ${filepath}`)
})

});
}

fetcher(input[0],input[1])