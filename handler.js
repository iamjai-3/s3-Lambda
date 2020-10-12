'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();


module.exports.hello = async event => {

  const Bucket = event.Records[0].s3.bucket.name;
  const Key = event.Records[0].s3.object.key;
  const data = await s3.getObject({ Bucket, Key }).promise();
  console.log("Raw text:\n" + data.Body.toString('ascii'));

};



