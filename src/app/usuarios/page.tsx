'use client';

import { useState } from 'react';
import { Search, Filter, UserPlus, Mail, Phone, Building, MoreVertical, Shield } from 'lucide-react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useRef } from 'react';

type UserRole = 'admin' | 'manager' | 'user';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: UserRole;
  status: 'active' | 'inactive';
  lastAccess: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@tecnoportas.com.br',
    phone: '(11) 99999-9999',
    company: 'TecnoPortas',
    role: 'admin',
    status: 'active',
    lastAccess: '2024-02-15 14:30',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    email: 'maria@tecnoportas.com.br',
    phone: '(11) 98888-8888',
    company: 'TecnoPortas',
    role: 'manager',
    status: 'active',
    lastAccess: '2024-02-15 10:15',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    email: 'pedro@tecnoportas.com.br',
    phone: '(11) 97777-7777',
    company: 'TecnoPortas',
    role: 'user',
    status: 'inactive',
    lastAccess: '2024-02-14 16:45',
  },
];

const roleColors: Record<UserRole, string> = {
  admin: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  manager: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  user: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
};

const roleLabels: Record<UserRole, string> = {
  admin: 'Administrador',
  manager: 'Gerente',
  user: 'Usuário',
};

export default function Usuarios() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    setOpenMenuId(null);
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Usuários</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie os usuários do sistema</p>
        </div>

        <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <UserPlus className="w-5 h-5 mr-2" />
          Novo Usuário
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar usuários..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-5 h-5 mr-2" />
          Filtros
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Usuário</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Cargo</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Último Acesso</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Mail className="w-4 h-4 mr-1" />
                          {user.email}
                        </span>
                        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Phone className="w-4 h-4 mr-1" />
                          {user.phone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                      <Shield className="w-3 h-3 mr-1" />
                      {roleLabels[user.role]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {user.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(user.lastAccess).toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative" ref={menuRef}>
                      <button
                        onClick={() => setOpenMenuId(openMenuId === user.id ? null : user.id)}
                        className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </button>

                      {openMenuId === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                          <button
                            onClick={() => setOpenMenuId(null)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Shield className="w-4 h-4" />
                            Alterar Permissões
                          </button>
                          <button
                            onClick={() => setOpenMenuId(null)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Mail className="w-4 h-4" />
                            Enviar E-mail
                          </button>
                          <button
                            onClick={() => setOpenMenuId(null)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {user.status === 'active' ? (
                              <>
                                <UserPlus className="w-4 h-4" />
                                Inativar Usuário
                              </>
                            ) : (
                              <>
                                <UserPlus className="w-4 h-4" />
                                Ativar Usuário
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 