// Template from https://github.com/TimoTielens/twt-nextjstemplate
// Use https://securitytxt.org/ for generating a new one

export async function GET() {
    const response = new Response('# Template from https://github.com/TimoTielens/twt-nextjstemplate:\r\n\r\nContact: mailto:XXX@XXX.nl\r\nExpires: 2069-01-01T00:00:00.000Z\r\nPreferred-Languages: en\r\nCanonical: https://xxx.nl/.well-known/security.txt');
    response.headers.set('Content-Type', 'text/plain');
    
    return response;
}