const {jq} = require('../globals');

const $el = jq('body').attr('id', 'root');

jq('#fallback, #fallback-hints').remove();

module.exports = {
    $el
};