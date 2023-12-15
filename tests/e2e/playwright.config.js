// @flow

import assert from 'assert';

const redColor = '\x1b[31m';
const whiteColor = '\x1b[0m';

let devGroup = process.env.DEVGROUP || 'desktop';
devGroup = devGroup.toLowerCase();
let isDesktop = false;
let isMobile = false;
let isTablet = false;
if (devGroup === 'desktop') {
  isDesktop = true;
} else if (devGroup === 'mobile') {
  isMobile = true;
} else if (devGroup === 'tablet') {
  isTablet = true;
} else {
  assert.fail(
    `${redColor}!!! False DEVGROUP parameter !!! [desktop, mobile, tablet]${whiteColor}`
  );
}
const viewports = {
  mobile: {width: 414, height: 720}, // width < 600
  tablet: {width: 900, height: 900}, // 600 <= width < 960
  desktop: {width: 1920, height: 1080}, // width >= 960
};

const config = {
  retries: 3,
  fullyParallel: true,
  // timeout: 180000, // do not change - has to be that high for some tests!
  timeout: 60000, // do not change - has to be that high for some tests!
  devGroup: devGroup,
  isDesktop: isDesktop,
  isMobile: isMobile,
  isTablet: isTablet,
  testMatch: /.*.test.js/,
  use: {
    launchOptions: {slowMo: parseInt(process.env.SLOWMO || 0)},
    viewport: viewports[devGroup],
    ignoreHTTPSErrors: true,
    baseURL: process.env.DOMAIN || 'https://qa.ab-in-den-urlaub.de',
    // IMPORTANT NOTE: the DOMAIN env variable needs to end with '/' otherwise the new staging url's won't work properly
  },
};

module.exports = config;

const urlPart = config.use.baseURL.split('https://')[1];
