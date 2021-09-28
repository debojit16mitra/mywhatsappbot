function successfullMessage(msg) {
    return "✅ *Büññy®Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Büññy®Bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *Büññy®Bot :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
