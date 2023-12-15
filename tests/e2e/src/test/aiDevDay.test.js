// @flow

import {test} from '@playwright/test'
import {AiDevDayProject} from '../suites/AiDevDay';

test.describe('Ai DevDay Testing', () => {
  test.describe.configure({mode: 'parallel'});

  const suite = new AiDevDayProject();

  test.describe('ai devday tests', async () => {
    suite.testAiDevDayWebsite();
  });
});
