'use client';

import { useState } from 'react';
import { Bell, Check, Clock, Filter, Trash2, User, DollarSign, FileText } from 'lucide-react';

type NotificationType = 'all' | 'unread' | 'mentions' | 'updates';

const notifications = [
  {
    id: 1,
    type: 'mention',
    title: 'Você foi mencionado em um comentário',
    description: '@joao.silva mencionou você em um comentário no negócio "Projeto E-commerce"',
    time: '5 minutos atrás',
    read: false,
    icon: User,
  },
  {
    id: 2,
    type: 'update',
    title: 'Negócio atualizado',
    description: 'O status do negócio "Consultoria TI" foi alterado para "Em negociação"',
    time: '1 hora atrás',
    read: false,
    icon: DollarSign,
  },
  {
    id: 3,
    type: 'system',
    title: 'Novo relatório disponível',
    description: 'O relatório mensal de vendas está disponível para download',
    time: '2 horas atrás',
    read: true,
    icon: FileText,
  },
];

export default function Notificacoes() {
  const [activeFilter, setActiveFilter] = useState<NotificationType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notificações</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie suas notificações e atualizações</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Check className="w-4 h-4 mr-2" />
            Marcar todas como lidas
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Trash2 className="w-4 h-4 mr-2" />
            Limpar todas
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Bell className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar notificações..."
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

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`
                p-4 rounded-lg border transition-colors cursor-pointer
                ${notification.read
                  ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  : 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`
                  p-2 rounded-lg
                  ${notification.read
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : 'bg-blue-100 dark:bg-blue-800'
                  }
                `}>
                  <Icon className={`
                    w-5 h-5
                    ${notification.read
                      ? 'text-gray-600 dark:text-gray-300'
                      : 'text-blue-600 dark:text-blue-300'
                    }
                  `} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`
                      font-medium
                      ${notification.read
                        ? 'text-gray-900 dark:text-white'
                        : 'text-blue-900 dark:text-blue-100'
                      }
                    `}>
                      {notification.title}
                    </h3>
                    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      <Clock className="w-4 h-4 mr-1" />
                      {notification.time}
                    </span>
                  </div>
                  <p className={`
                    text-sm mt-1
                    ${notification.read
                      ? 'text-gray-600 dark:text-gray-300'
                      : 'text-blue-700 dark:text-blue-200'
                    }
                  `}>
                    {notification.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 