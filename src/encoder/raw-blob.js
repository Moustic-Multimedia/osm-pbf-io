const zlib = require('node:zlib');

module.exports = (rawBlob, compress) => {
  if (compress) {
    const compressedBlob = zlib.deflateSync(rawBlob);
    return {
      rawSize: rawBlob.length,
      zlibData: compressedBlob
    };
  }

  return {
    raw: rawBlob
  };
};
