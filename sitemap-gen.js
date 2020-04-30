const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://reactard.xyz",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "static/",
  nextConfigPath: __dirname + "/next.config.js",
  ignoredExtensions: ["png", "jpg"],
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/test/styles.css",
    },
    {
      type: "text/xsl",
      styleFile: "test/test/styles.xls",
    },
  ],
  targetDirectory: "public",
});
