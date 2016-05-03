var Helpers = EJS.Helpers.prototype;

Helpers.fromNow = function (timestamp) {

    return moment(timestamp).fromNow();
};
Helpers.timestamp_fromat = function (timestamp) {

    return moment(timestamp).format('a H 时 m 分');
};