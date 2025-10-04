"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to blogs admin page immediately
    router.replace('/blog/admin');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl text-gray-600">Redirecting to Blog Management...</div>
    </div>
  );
};

export default AdminRedirect;
