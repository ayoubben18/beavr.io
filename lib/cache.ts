export const redisCacheKeys = {
    limits: (organizationId: string) => `limits:${organizationId}`
} as const