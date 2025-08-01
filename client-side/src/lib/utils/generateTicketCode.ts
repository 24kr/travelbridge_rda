import crypto from 'crypto';

export function generateTicketCode(agencyId: string, plate: string, date: string, time: string): string {
    const seed = `${agencyId}-${plate}-${date}-${time}`;
    return crypto.createHash('md5').update(seed).digest('hex').slice(0, 6).toUpperCase();
}
