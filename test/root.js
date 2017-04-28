global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('jsdom');
const path = require('path');

before(function(done) {
  const src = path.resolve(__dirname, '..', 'index.js');
  const babelResult = babel.transformFileSync(src, {
    presets: ['es2015']
  });
  const html = path.resolve(__dirname, '..', 'index.html');

  jsdom.env(html, [], {
    src: babelResult.code,
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err, window) => {
    if (err) {
      return done(err);
    }

    Object.keys(window).forEach(key => {
      global[key] = window[key];
    });

    return done();
  });
});
