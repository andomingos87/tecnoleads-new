'use client';

import { useState } from 'react';
import { Search, Filter, User, UserX, UserPlus } from 'lucide-react';

type TabType = 'novos' | 'ativos' | 'inativos';

const tabs = [
  { id: 'novos', label: 'Novos Leads', icon: UserPlus },
  { id: 'ativos', label: 'Contatos Ativos', icon: User },
  { id: 'inativos', label: 'Inativados', icon: UserX },
] as const;

const mockContacts = [
  {
    id: 1,
    name: 'João Silva',
    company: 'TechCorp',
    status: 'Ativo',
    lastInteraction: '2024-02-10',
    email: 'joao@techcorp.com',
    phone: '(11) 99999-9999',
  },
  // Adicione mais contatos mock aqui
];

export default function Contatos() {
  const [activeTab, setActiveTab] = useState<TabType>('ativos');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Contatos</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie seus leads e contatos</p>
        </div>
        
        <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <UserPlus className="w-5 h-5 mr-2" />
          Novo Contato
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar contatos..."
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

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex overflow-x-auto">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`
                  flex items-center px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap
                  ${activeTab === id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }
                `}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <div className="grid gap-4">
            {mockContacts.map((contact) => (
              <div
                key={contact.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contact.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {contact.status}
                  </span>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">E-mail</p>
                    <p className="font-medium text-gray-900 dark:text-white">{contact.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Telefone</p>
                    <p className="font-medium text-gray-900 dark:text-white">{contact.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 