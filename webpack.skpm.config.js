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
        buffer: "@skpm/buffer",
        events: path.join(__dirname, "src", "events")
    }
    const CORE_MODULES = ["util", "console", "buffer", "path", "os"];
    config.externals = [
        (context, request, callback) => {
            // sketch API
            if (/^sketch\//.test(request) || request === 'sketch') {
                return callback(null, `commonjs ${request}`)
            }
            // core modules shipped in Sketch
            if (CORE_MODULES.indexOf(request) !== -1) {
                return callback(null, `commonjs ${request}`)
            }
            return callback()
        },
    ]

    delete config.module.rules[0].exclude
    config.module.rules[0].include = [
        path.join(__dirname, 'node_modules'),
    ]

    console.log(config)
}