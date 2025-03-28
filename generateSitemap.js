import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define site URL
const SITE_URL = "https://www.gitamlegends.com/"; // Change this to your actual domain

// Define the static routes
const routes = [
  "/",
  "/about",
  "/contact",
  "/job/techjob",
  "/job/nontechjob",
  "/internship",
  "/free-certification",
  "/login/",
];

// Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: SITE_URL });

// Get current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Write sitemap to file
const writeStream = createWriteStream(path.join(__dirname, "public", "sitemap.xml"));

// Pipe stream to file and also generate the promise
streamToPromise(sitemapStream).then(() => {
  console.log("✅ Sitemap generated successfully!");
}).catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});

// Add routes
routes.forEach((route) => {
  sitemapStream.write({ url: route, changefreq: "daily", priority: 0.8 });
});

// Close the stream properly
sitemapStream.end();
sitemapStream.pipe(writeStream);