import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// Function to generate sitemap
async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: "https://gitamlegends.com" });

    // Define your website pages here
    const pages = ["/", "/login"];

    for (const page of pages) {
        sitemap.write({ url: page, changefreq: "daily", priority: 0.8 });
    }

    sitemap.end();

    // Save sitemap to a file
    const sitemapBuffer = await streamToPromise(sitemap);
    createWriteStream("public/sitemap.xml").write(sitemapBuffer);

    console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
