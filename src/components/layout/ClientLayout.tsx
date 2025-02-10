'use client';

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserClient } from '@supabase/ssr';
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthPage = pathname?.startsWith('/auth/');

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);

        if (!session && !isAuthPage) {
          router.push('/auth/signin');
        } else if (session && isAuthPage) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      if (!session && !isAuthPage) {
        router.push('/auth/signin');
      }
    });

    return () => subscription.unsubscribe();
  }, [isAuthPage, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f3f3f3] dark:bg-[#1a1a1a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isAuthPage) {
    return <main className="min-h-screen bg-[#f3f3f3] dark:bg-[#1a1a1a]">{children}</main>;
  }

  if (!isAuthenticated && !isAuthPage) {
    return null; // Não renderiza nada enquanto redireciona
  }

  return (
    <>
      <Sidebar />
      <TopBar />
      <main className="ml-[250px] pt-16 min-h-screen bg-[#f3f3f3] dark:bg-[#1a1a1a]">
        <div className="container mx-auto px-6 py-8 max-w-[1440px]">
          {children}
        </div>
      </main>
    </>
  );
} 