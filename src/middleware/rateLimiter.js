const rateLimitMap = new Map();

export default function rateLimitMiddleware(handler) {
    return (req, res) => {
        const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        const limit = 10; // Limiting requests to 10 per minute per IP
        const windowMs = 60 * 1000; // 1 minute

        if (!rateLimitMap.has(ip)) {
            rateLimitMap.set(ip, {
                count: 0,
                lastReset: Date.now(),
            });
        }

        const ipData = rateLimitMap.get(ip);

        if (Date.now() - ipData.lastReset > windowMs) {
            ipData.count = 0;
            ipData.lastReset = Date.now();
        }

        ipData.count += 1;
        res.setHeader('X-RateLimit-Limit', limit)
        res.setHeader('X-RateLimit-Remaining', ipData.count)

        if (ipData.count >= limit) {
            return res.status(429).send("Too Many Requests");
        }

        return handler(req, res);
    };
}