import type CspDev from 'csp-dev';

export function vercel(): CspDev.DirectiveDescriptor {
  return {
    'script-src': [ 'https://vercel.live', 'https://vercel.com' ],
    'font-src': [ 'https://assets.vercel.com' ],
    'img-src': [ 'https://*.vercel.com', 'https://vercel.com' ],
    'connect-src': [ 'https://vitals.vercel-insights.com' ],
    'frame-src': [ 'https://vercel.live' ],
  };
}
