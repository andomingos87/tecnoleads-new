'use client';

import { useState } from 'react';
import { Search, Filter, DollarSign, Calendar, Clock, AlertCircle } from 'lucide-react';

type BusinessStatus = 'orçamento' | 'acompanhando' | 'negociando' | 'ganho' | 'perdido';

const statusColors = {
  orçamento: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  acompanhando: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  negociando: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  ganho: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  perdido: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

const mockBusinesses = [
  {
    id: 1,
    title: 'Projeto E-commerce',
    client: 'TechCorp',
    value: 45000,
    status: 'negociando' as BusinessStatus,
    deadline: '2024-03-15',
    lastUpdate: '2024-02-10',
    description: 'Desenvolvimento de plataforma e-commerce completa',
  },
  {
    id: 2,
    title: 'Consultoria TI',
    client: 'InnovaSoft',
    value: 12000,
    status: 'orçamento' as BusinessStatus,
    deadline: '2024-03-01',
    lastUpdate: '2024-02-09',
    description: 'Consultoria para modernização da infraestrutura',
  },
];

export default function Negocios() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Negócios</h1>
          <p className="text-gray-600 dark:text-gray-300">Gerencie suas oportunidades de negócio</p>
        </div>
        
        <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <DollarSign className="w-5 h-5 mr-2" />
          Novo Negócio
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar negócios..."
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBusinesses.map((business) => (
          <div
            key={business.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {business.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {business.client}
                </p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[business.status]}`}>
                {business.status.charAt(0).toUpperCase() + business.status.slice(1)}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {business.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400 flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  Valor
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(business.value)}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Prazo
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {new Date(business.deadline).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Atualizado em {new Date(business.lastUpdate).toLocaleDateString('pt-BR')}
              </span>
              <button className="flex items-center text-primary hover:text-primary/80">
                <AlertCircle className="w-4 h-4 mr-1" />
                Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 