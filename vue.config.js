module.exports = {
  publicPath: process.env.VUE_BASE_PATH === 'gh-pages'
    ? '/bloc/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
