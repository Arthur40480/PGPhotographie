'use strict';
const axios = require('axios');
const { PolicyError } = require('@strapi/utils').errors;

/**
 * `recaptcha` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    const secretKey = '6Lc6aewnAAAAAHe80LC3_RxWTM5e_Unj6PsM1a8-';
    const token = policyContext.request.body.data.recaptchaToken;
    const googleRequest = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const success = axios.post(googleRequest).then((response) => {
      return response.data.success;
    })

    return success;
};
