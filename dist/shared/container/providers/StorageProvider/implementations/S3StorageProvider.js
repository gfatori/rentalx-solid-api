"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3StorageProvider = void 0;

var _upload = _interopRequireDefault(require("@config/upload"));

var _awsSdk = require("aws-sdk");

var _fs = _interopRequireDefault(require("fs"));

var _mime = _interopRequireDefault(require("mime"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class S3StorageProvider {
  constructor() {
    this.client = void 0;
    this.client = new _awsSdk.S3({
      region: process.env.AWS_BUCKET_REGION
    });
  }

  async save(file, folder) {
    const originalname = (0, _path.resolve)(_upload.default.tmpFolder, file);
    const fileContent = await _fs.default.promises.readFile(originalname);

    const contentType = _mime.default.getType(originalname);

    if (originalname && fileContent && contentType) {
      await this.client.putObject({
        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
        Key: file,
        ACL: "public-read",
        Body: fileContent,
        ContentType: contentType
      }).promise();
    }

    await _fs.default.promises.unlink(originalname);
    return file;
  }

  async delete(file, folder) {
    await this.client.deleteObject({
      Bucket: `${process.env.AWS_BUCKET}/${folder}`,
      Key: file
    }).promise();
  }

}

exports.S3StorageProvider = S3StorageProvider;