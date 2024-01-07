import { isNextApiRequest } from './isNextApiRequest';
import { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';

const getBody = async (req: NextApiRequest | NextRequest | Request) => {
  if (isNextApiRequest(req)) {
    return req.body;
  }

  if (!req) { 
    throw Error("Invalid request");
  } else {
    console.dir(req);
  }
  return req.headers.get('content-type') === 'application/json' ? req.json() : req.text();
};

export { getBody };