'use strict';

/**
 * A set of functions called "actions" for `project-page`
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project-page.project-page");
