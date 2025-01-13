const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// URL вашего сайта
const hostname = "https://taxopark.vercel.app";

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname });

  // Добавьте маршруты вашего приложения
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
//   sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
//   sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.8 });
  // Добавляйте маршруты в зависимости от структуры вашего приложения

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream("./public/sitemap.xml").write(data);
  console.log("Карта сайта создана!");
};

generateSitemap();
