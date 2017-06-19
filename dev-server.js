/* @flow */

const express = require('express');
const server = express();
const fs = require('fs');
const resolve = file => require('path').resolve(__dirname, file);

const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: 0
});

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: fs.readFileSync('./index.html', 'utf-8'),
    clientManifest
});

server.use('/dist', serve('./dist', true));
server.get('*', function(req, res) {
    renderer.renderToString((err, html) => {
        if (err) console.log(err);
        res.end(html);
    });
});

const listener = server.listen(3000, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});
