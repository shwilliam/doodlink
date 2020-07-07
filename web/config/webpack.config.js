module.exports = (config, {env}) => {
  config.plugins.forEach(plugin => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.title = 'dood.link'
    }
  })

  return config
}
