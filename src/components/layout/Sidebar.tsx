'use client';

import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart2, 
  Bug, 
  MessageSquare, 
  HelpCircle, 
  LogOut,
  Contact
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors, layout } from '@/utils/theme';
import { createBrowserClient } from '@supabase/ssr';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Contact, label: 'Contatos', href: '/contatos' },
  { icon: FileText, label: 'Negócios', href: '/negocios' },
  { icon: BarChart2, label: 'Relatórios', href: '/relatorios' },
  { icon: Users, label: 'Usuários', href: '/usuarios' },
];

const footerItems = [
  { icon: HelpCircle, label: 'Suporte', href: '/ajuda' },
  { icon: LogOut, label: 'Sair', onClick: async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    window.location.href = '/auth/signin';
  }},
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b h-20 border-gray-200 dark:border-gray-700">
        <img src="/logo-tecnoportas.png" alt="Logo" className="h-full" />
      </div>

      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-primary dark:bg-blue-900/50 dark:text-blue-200' 
                      : 'text-[#333333] dark:text-gray-300 hover:bg-blue-50/80 dark:hover:bg-blue-900/30'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-primary dark:text-blue-200' : 'text-[#333333] dark:text-gray-300'} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto px-3 pb-4 border-t border-gray-200 dark:border-gray-700 pt-3">
        <ul className="space-y-0.5">
          {footerItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <li key={item.href || item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors text-xs w-full"
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="flex items-center gap-2 px-3 py-1.5 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors text-xs w-full"
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
} 