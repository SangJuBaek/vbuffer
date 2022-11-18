'use strict'

function VBuffer () {}
VBuffer.prototype.bufferFrom = (msg, type) => {
  return Buffer.from(msg, type)
}

module.exports = new VBuffer()
