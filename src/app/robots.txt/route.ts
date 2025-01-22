// Template from https://github.com/TimoTielens/twt-nextjstemplate
// Use https://www.seoptimer.com/robots-txt-generator for generating a new one

export async function GET() {
    const response = new Response('# Template from https://github.com/TimoTielens/twt-nextjstemplate:\r\n\r\nSitemap: https://xxx.nl/sitemap.xml\r\nUser-Agent: *\r\nDisallow: /');
    response.headers.set('Content-Type', 'text/plain');
    
    return response;
}