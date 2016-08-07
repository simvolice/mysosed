/**
 * Created by Admin on 07.08.2016.
 */


var Handlebars = require('sails/node_modules/handlebars');
var Swag = require('swag');
var helper = require('handlebars-helper-i18n');

Swag.registerHelpers(Handlebars);




Handlebars.registerHelper('i18n', helper.i18n);

