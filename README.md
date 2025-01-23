# Intermittent Tailwind CSS Class Application Failure in Production

This repository demonstrates a bug where Tailwind CSS classes are inconsistently applied in a production build.  During development, all classes function as expected. However, in the production build, some classes are ignored, while others work correctly.  The issue is not related to incorrect configuration or missing classes in the HTML; the classes are present but not styled. 

## Bug Description

The bug manifests as a failure to apply specific Tailwind CSS classes in the production build. The classes are present in the rendered HTML, but the corresponding CSS rules are not applied.  This behavior is inconsistent—some classes are affected, while others are not.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build` to build the production version.
4. Observe the inconsistent application of Tailwind CSS classes in the production build (check `index.html`).

## Solution

The solution involves ensuring that PurgeCSS (or similar optimization tool) correctly identifies and includes the necessary CSS rules for your components. Improperly configured PurgeCSS can remove necessary CSS rules, causing the problem in production builds.  The solution file demonstrates a fix for a potential configuration issue.