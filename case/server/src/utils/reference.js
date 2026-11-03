import crypto from 'crypto';
export const makeReference=()=>`APT-${crypto.randomBytes(4).toString('hex').slice(0,6).toUpperCase()}`;
