import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

const WEBHOOK_URL = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=b4b2d92d-6a16-43f8-91aa-81d70afdf844';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = JSON.stringify(req.body);

  return new Promise((resolve) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const request = https.request(WEBHOOK_URL, options, (response) => {
      let data = '';
      response.on('data', (chunk) => { data += chunk; });
      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.errcode === 0) {
            res.status(200).json({ success: true, message: '消息发送成功' });
          } else {
            res.status(500).json({ success: false, error: result.errmsg });
          }
        } catch {
          res.status(200).json({ success: true });
        }
        resolve(null);
      });
    });

    request.on('error', (error) => {
      res.status(500).json({ success: false, error: error.message });
      resolve(null);
    });

    request.write(body);
    request.end();
  });
}