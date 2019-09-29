module.exports = {
  apps: [{
    name: '55pbx_task',
    script: 'src/app.js',
    instances: 'max',
    exec_mode: 'cluster'
  }]
}
