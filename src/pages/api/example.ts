import type { NextApiRequest, NextApiResponse } from 'next'
import rateLimitMiddleware from "@/middleware/rateLimiter";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      try {
          res.status(200).json({ message: 'This a post action' })
      }
      catch {
          res.status(500).json({ error: 'Could not handle the request' })
      }
  } else {
      res.status(200).json({ error: 'This is a get action' });
  }
}

export default rateLimitMiddleware(handler);