/*
 * node-rdkafka - Node.js wrapper for RdKafka C/C++ library
 *
 * Copyright (c) 2016 Blizzard Entertainment
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

var kafka = require('bindings')('node-librdkafka');
var SegfaultHandler = require('segfault-handler');

// Optionally specify a callback function for custom logging. This feature is currently only supported for Node.js >= v0.12 running on Linux.
SegfaultHandler.registerHandler("crash.log", function(signal, address, stack) {
	// Do what you want with the signal, address, or stack (array)
	// This callback will execute before the signal is forwarded on.
    console.error(signal, address, stack);
});
module.exports = kafka;
