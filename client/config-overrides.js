/* config-overrides.js */

module.exports =  {
    webpack: function(config, env) {
        config.externals = {'module':'Module'}
        return config;
    }
}