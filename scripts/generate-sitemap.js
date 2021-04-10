/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');
/* eslint-enable @typescript-eslint/no-var-requires */

async function sitemapXML() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'content/posts/',
    'pages/*.js',
    '!pages/index.js',
    '!pages/_*.js',
    '!pages/api',
    '!pages/sitemap.xml.js'
  ]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://0xtaipoian.github.io</loc>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
            ${pages
              .map((page) => {
                const path = page
                  .replace('content/','')
                  .replace("posts/", 'post/')
                  .replace('pages/', '')
                  .replace('.js', '')
                  .replace('.md', '');
                // console.log(page); // Use this to confirm export of the sitemap
                const spath = path.split('/');
                let spathfin;

                if (spath.length === 1){
                  [spathfin] = spath
                } else {
                  spathfin = spath.slice(0, spath.length -1).join('/')
                }

                const route = spathfin === '/index' ? '' : spathfin;

                // console.log(page, route);

                return `
                        <url>
                            <loc>${`https://0xtaipoian.github.io/${route}`}</loc>
                            <changefreq>daily</changefreq>
                            <priority>0.5</priority>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);

  return formatted;
}

sitemapXML();