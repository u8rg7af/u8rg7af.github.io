/*! Built with http://stenciljs.com */
App.loadBundle("./chunk1.js", ["exports"], function (e) { window.App.h, e.Highscore = /** @class */ (function () {
    function class_1() {
    }
    class_1.getHighscore = function () { return JSON.parse(localStorage.getItem("highscore")); };
    class_1.addHighscore = function (e) { var t = JSON.parse(localStorage.getItem("highscore")); t || (t = []); var r = new Date; t.push({ score: e, date: r.getTime() }), t.sort(function (e, t) { return e.score > t.score ? -1 : e.score < t.score ? 1 : 0; }), t.length > 3 && (t.length = 3), localStorage.setItem("highscore", JSON.stringify(t)); };
    return class_1;
}()); });
