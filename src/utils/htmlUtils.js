const htmlUtils = {
    buildHtmlStr: (message) => {
        return '<i class="fas fa-check-circle" style="color: green;margin-right: 5px"></i>  <strong>' + message + '</strong>'
    },
    buildHtmlErrorStr: (message) => {
        return '<i class="fas fa-times-circle" style="color: red; margin-right: 5px"></i>  <strong>' + message + '</strong>'
    }
}

export default htmlUtils;