import type { Metadata } from 'next';
import AdminApp from '@/components/admin/AdminApp';
import '@/styles/pages/admin.css';

export const metadata: Metadata = {
  title: { absolute: 'Admin | Trusted Tech Leader' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="page-admin">
      <AdminApp />
    </div>
  );
}
