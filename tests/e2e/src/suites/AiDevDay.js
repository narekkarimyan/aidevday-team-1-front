// @flow

import {test} from '@playwright/test'
import {ai} from '@zerostep/playwright'
import {sleep} from '../utils/common';
require('dotenv').config();

export class AiDevDayProject {
  testAiDevDayWebsite() {
    test(`ai devday test`, async ({
      page,
      baseURL,
    }, testInfo) => {
      const ZEROSTEP_TOKEN = process.env.ZEROSTEP_TOKEN;
      const aiArgs = { page, test }
      await page.goto('https://do3fdmejafz2w.cloudfront.net/')
      await ai('Click Login', aiArgs);
      await sleep(500);
      await ai('Click Submit', aiArgs);
      await sleep(500);
      await ai('Click Show Alert', aiArgs);
      await sleep(1000);
      await ai('Click Close Alert', aiArgs);
      await sleep(1000);
    });
  }
}
