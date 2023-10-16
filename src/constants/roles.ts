export const roles = ["subject", "experimenter"] as const;

export type Role = (typeof roles)[number];
