/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or an asset
 **/

var path = require("path")

module.exports = function (config, isPluginCommand) {
    config.resolve.alias = {
        fs: "@skpm/fs",
        child_process: "@skpm/child_process",
        debug: path.join(__dirname, "src", "debug")
    }

    config.resolve.modules = [path.resolve('node_modules')]

    var exitingExternalsHandler = config.externals[0];

    // exclude sketch's built in events module in favor of our wrapper
    config.externals = [
        (context, request, callback) => {
            if (request === "events") {
                return callback();
            }
            return exitingExternalsHandler(context, request, callback);
        }
    ];
}