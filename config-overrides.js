// config-overrides.js
module.exports = function override(config, env) {
    // Modify Webpack configuration here
  
    // Add rule to suppress source-map-loader warnings
    config.ignoreWarnings = [/Failed to parse source map/];
  
    return config;
  };
  