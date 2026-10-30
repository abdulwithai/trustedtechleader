import type { Metadata } from 'next';
import AiCodeAuditPage from '@/components/ai-code-audit/AiCodeAuditPage';

const title = 'AI-Generated Code Security Audit & Production Readiness | Trusted Tech Leader';
const description =
  'Built your app with Cursor, Bolt, Lovable, Replit, v0 or Claude Code? A senior engineer audits the code for security holes, tests it like an attacker, and gets it ready for real users.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ai-code-security-audit/' },
  openGraph: { title, description, url: '/ai-code-security-audit/', type: 'website' },
};

export default function Page() {
  return <AiCodeAuditPage />;
}
