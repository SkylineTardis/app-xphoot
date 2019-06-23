var thymeleafLib = require('/lib/thymeleaf');

exports.get = function (req) {
    var view = resolve('start.html');
    var params = {};

    var body = thymeleafLib.render(view, params);

    return {
        contentType: 'text/html',
        body: body
    };
};
