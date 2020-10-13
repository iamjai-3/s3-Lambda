'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const csv=require('csvtojson')



module.exports.hello = async event => {

  const Bucket = event.Records[0].s3.bucket.name;
  const Key = event.Records[0].s3.object.key;
  // const data = await s3.getObject({ Bucket, Key }).promise();
  // const params = {
  //           Bucket: Bucket,
  //           Key: Key,
  //         };
  // const stream = s3.getObject(params).createReadStream();
  // // convert csv file (stream) to JSON format data
  // const jsonArray = await csv().fromStream(stream);
  // console.log(JSON.stringify(stream))
  // console.log(jsonArray.length);
  console.log('NAME: ', process.env.NAME);
  console.log('EMAIL: ', process.env.MAIL);
  // console.log("Raw text:\n" + data.Body.toString('ascii'));

};



