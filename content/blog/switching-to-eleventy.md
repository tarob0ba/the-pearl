---
title: Switching to Eleventy
date: 2024-09-02
tags: ["11ty", "the pearl"]
---

After using Hexo for two years, I've rewritten The Pearl and jumped ship to [Eleventy](https://www.11ty.dev/). I mainly did this because of Eleventy's promising backward compatibility. The lack of this in Hexo was a problem for me because I often update The Pearl infrequently, and so updating Hexo inevitably broke it every time.

Besides that, the migration also made it easier to debloat the site by giving me a blank slate to work with. Updates to the website include...

## Light mode!

The website now features a gorgeous light mode theme that is nice on the eyes while keeping the distinctive purplish-indigo accent color. The theme is automatically selected based on your device's settings with an `@media` query in order to avoid JavaScript.

## Heading anchors

The heading anchors are now clickable and copyable, which is a nice quality-of-life feature.

## Debloating

The homepage now weighs in at a svelte [insert size] kB, which is a [insert reduction]% improvement from before. Part of this involved removing unused styles, unnecessary icons, and the Umami analytics script.

## Conclusion

I love Eleventy!
