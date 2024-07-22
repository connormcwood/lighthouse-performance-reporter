#!/usr/bin/env node

import minimist from 'minimist';
import { getParameters } from './config/parameters';
const lighthouse = require('lighthouse');
const ChromeLauncher = require('chrome-launcher');

var argv = minimist(process.argv.slice(2), {
    string: ['url'],
});

const transformedArguments = getParameters(argv);

const defaultLighthouseConfig = {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['performance', 'accessibility'],
        output: 'json'
    },
}

const defaultAudits = [
    'first-contentful-paint',
    'first-meaningful-paint',
    'speed-index',
    'time-to-first-byte',
    'first-cpu-idle',
    'interactive',
]

const defaultChromeConfig = {
    startingUrl: 'https://www.developright.co.uk',
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu']
}

async function runner({
    urls,
    chromeConfig = defaultChromeConfig,
    lighthouseConfig = defaultLighthouseConfig,
}: { urls: any, chromeConfig?: any, lighthouseConfig?: any }) {
    try {
        await urls.forEach(async (url: string) => {
            defaultChromeConfig.startingUrl = url;
            const chrome = await ChromeLauncher.launch(chromeConfig)
            lighthouseConfig.port = chrome.port;
            chromeConfig.port = chrome.port;

            console.log(`Chrome debugging port running on ${chrome.port}`);


            const result = await lighthouse(
                url,
                chromeConfig,
                lighthouseConfig,
            )
            console.info(result?.lhr?.audits);

            await chrome.kill();
        });
    } catch (error) {
        console.error(error);
    }
};

(async () => {
    await runner({
        urls: transformedArguments.url,
        chromeConfig: defaultChromeConfig,
        lighthouseConfig: defaultLighthouseConfig
    })
})();