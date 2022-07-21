"use strict";
exports.__esModule = true;
exports.areYouPlayingBanjo = void 0;
function areYouPlayingBanjo(name) {
    var keepNameFormated = name.split("");
    if (keepNameFormated[0].toLowerCase() === "r") {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}
exports.areYouPlayingBanjo = areYouPlayingBanjo;
