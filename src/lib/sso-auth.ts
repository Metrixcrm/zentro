// Zentro Global — SSO Authentication (OAuth2/OIDC simulation)
// Root domain session persistence via .zentro.com cookie

export const ZENTRO_SSO_DOMAINS = [
  "matrixx.zentro.com",
  "it.zentro.com",
  "vintology.zentro.com",
  "skyland.zentro.com",
  "mart.zentro.com",
  "ayses.zentro.com",
] as const;

export type ZentroSSODomain = (typeof ZENTRO_SSO_DOMAINS)[number];

export interface SSOUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  connectedDomains: ZentroSSODomain[];
}

export interface SSOSession {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  user: SSOUser;
}

const SESSION_KEY = "zentro_sso_session";

export function getSSOSession(): SSOSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as SSOSession;
    if (session.expiresAt < Date.now()) {
      clearSSOSession();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function setSSOSession(session: SSOSession): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  // Simulate root-domain cookie
  document.cookie = `zentro_sso=${session.accessToken}; domain=.zentro.com; path=/; Secure; SameSite=Lax`;
}

export function clearSSOSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
  document.cookie = "zentro_sso=; domain=.zentro.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

export function isConnected(domain: ZentroSSODomain): boolean {
  const session = getSSOSession();
  return !!session?.user.connectedDomains.includes(domain);
}

export async function signInWithSSO(email: string): Promise<SSOSession> {
  // Simulated OAuth2/OIDC PKCE flow
  const session: SSOSession = {
    accessToken: `zentro_${btoa(email)}_${Date.now()}`,
    refreshToken: `refresh_${Date.now()}`,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    user: {
      id: crypto.randomUUID(),
      email,
      name: email.split("@")[0],
      connectedDomains: [...ZENTRO_SSO_DOMAINS],
    },
  };
  setSSOSession(session);
  return session;
}

export function signOutSSO(): void {
  clearSSOSession();
}
