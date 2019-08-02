'use strict';

const Replique = require('../model/replique');

module.exports.list = (req, res, next) => {
    console.log(req.query);
    Replique.find(req.query)
        .then(repliques => res.json(repliques))
        .catch(next);
};


module.exports.getPerma = (req, res, next) => {
    var permalien = req.params.permalien;
    Replique.findOne({ 'permalien': permalien })
        .then(replique => {
            if(!replique) {
                req.message = 'Replique introuvable';
                return next();
            }
            let class_body = 'rio'
            if(replique.film === "OSS 117 : Le Caire nid d’espions") {
                class_body = 'caire'
            }
            res.render('permalien', { 
                class_body:class_body,
                replique: replique.replique, 
                film: replique.film
              });
        })
        .catch(next);
};

module.exports.random = (req, res, next) => {
    Replique.aggregate({ $sample: { size: 1 } })
        .then(repliques => res.json(repliques))
        .catch(next);
};


module.exports.sitemap = (req, res, next) => {
    Replique.find().lean()
        .then(repliques => {
            var urls = ['about.html', 'javascript.html', 'css.html', 'html5.html'];
            var root_path = 'http://www.oss-117.fr/';
            var priority = 0.5;
            var freq = 'monthly';
            var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
            xml += '<url>';
            xml += '<loc>'+ root_path + '</loc>';
            xml += '<changefreq>hourly</changefreq>';
            xml += '<priority>'+ priority +'</priority>';
            xml += '</url>';
              
            xml += '<url>';
            xml += '<loc>'+ root_path + 'piquette/Jack</loc>';
            xml += '<changefreq>'+ freq +'</changefreq>';
            xml += '<priority>'+ priority +'</priority>';
            xml += '</url>';

            for (var i = 0; i < repliques.length; i++) {
                xml += '<url>';
                xml += '<loc>'+ root_path + 'replique/' + repliques[i].permalien + '</loc>';
                xml += '<changefreq>'+ freq +'</changefreq>';
                xml += '<priority>'+ priority +'</priority>';
                xml += '</url>';
            }
            xml += '</urlset>';
            res.type('text/xml');
            res.send(xml);
        })
        .catch(next);
};