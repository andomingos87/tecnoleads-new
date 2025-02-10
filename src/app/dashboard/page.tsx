'use client';

import { ArrowDown, ArrowUp, DollarSign, Users, Briefcase, ChartBar, Filter, Calendar, MoreVertical, MessageCircle, Mail, Eye, BookmarkPlus, UserMinus, Send, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

const stats = [
  {
    title: 'Vendas Total',
    value: 'R$ 45.231,89',
    change: '+12.5%',
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: 'Novos Leads',
    value: '145',
    change: '+22.4%',
    isPositive: true,
    icon: Users,
  },
  {
    title: 'Negócios Fechados',
    value: '38',
    change: '-5.2%',
    isPositive: false,
    icon: Briefcase,
  },
  {
    title: 'Taxa de Conversão',
    value: '26.2%',
    change: '+2.1%',
    isPositive: true,
    icon: ChartBar,
  },
];

const recentLeads = [
  {
    id: 1,
    name: 'João Silva',
    product: 'Porta de Alumínio',
    email: 'joao@email.com',
    whatsapp: '11999999999',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    product: 'Janela Acústica',
    email: 'maria@email.com',
    whatsapp: '11988888888',
    date: '2024-03-14',
  },
  {
    id: 3,
    name: 'Pedro Santos',
    product: 'Porta de Vidro',
    email: 'pedro@email.com',
    whatsapp: '11977777777',
    date: '2024-03-13',
  },
  {
    id: 4,
    name: 'Ana Costa',
    product: 'Kit Porta Pronta',
    email: 'ana@email.com',
    whatsapp: '11966666666',
    date: '2024-03-12',
  },
  {
    id: 5,
    name: 'Lucas Mendes',
    product: 'Porta de Correr',
    email: 'lucas@email.com',
    whatsapp: '11955555555',
    date: '2024-03-11',
  },
  {
    id: 6,
    name: 'Isabela Santos',
    product: 'Janela Basculante',
    email: 'isabela@email.com',
    whatsapp: '11944444444',
    date: '2024-03-10',
  },
  {
    id: 7,
    name: 'Rafael Lima',
    product: 'Porta Pivotante',
    email: 'rafael@email.com',
    whatsapp: '11933333333',
    date: '2024-03-09',
  },
  {
    id: 8,
    name: 'Carolina Ferreira',
    product: 'Kit Janela',
    email: 'carolina@email.com',
    whatsapp: '11922222222',
    date: '2024-03-08',
  },
  {
    id: 9,
    name: 'Thiago Alves',
    product: 'Porta Social',
    email: 'thiago@email.com',
    whatsapp: '11911111111',
    date: '2024-03-07',
  },
  {
    id: 10,
    name: 'Fernanda Costa',
    product: 'Janela Maxim-ar',
    email: 'fernanda@email.com',
    whatsapp: '11900000000',
    date: '2024-03-06',
  },
];

const recentDeals = [
  {
    id: 1,
    clientName: 'Roberto Andrade',
    openDate: '2024-03-15',
    status: 'Fazer orçamento',
    email: 'roberto@email.com',
    whatsapp: '11999999999',
  },
  {
    id: 2,
    clientName: 'Mariana Costa',
    openDate: '2024-03-14',
    status: 'Em andamento',
    email: 'mariana@email.com',
    whatsapp: '11988888888',
  },
  {
    id: 3,
    clientName: 'Carlos Eduardo',
    openDate: '2024-03-13',
    status: 'Em negociação',
    email: 'carlos@email.com',
    whatsapp: '11977777777',
  },
  {
    id: 4,
    clientName: 'Patricia Silva',
    openDate: '2024-03-12',
    status: 'Ganho',
    email: 'patricia@email.com',
    whatsapp: '11966666666',
  },
  {
    id: 5,
    clientName: 'Fernando Santos',
    openDate: '2024-03-11',
    status: 'Perdido',
    email: 'fernando@email.com',
    whatsapp: '11955555555',
  },
  {
    id: 6,
    clientName: 'Amanda Oliveira',
    openDate: '2024-03-10',
    status: 'Em andamento',
    email: 'amanda@email.com',
    whatsapp: '11944444444',
  },
  {
    id: 7,
    clientName: 'Ricardo Mendes',
    openDate: '2024-03-09',
    status: 'Fazer orçamento',
    email: 'ricardo@email.com',
    whatsapp: '11933333333',
  },
  {
    id: 8,
    clientName: 'Juliana Pereira',
    openDate: '2024-03-08',
    status: 'Em negociação',
    email: 'juliana@email.com',
    whatsapp: '11922222222',
  },
  {
    id: 9,
    clientName: 'Gabriel Costa',
    openDate: '2024-03-07',
    status: 'Ganho',
    email: 'gabriel@email.com',
    whatsapp: '11911111111',
  },
  {
    id: 10,
    clientName: 'Beatriz Lima',
    openDate: '2024-03-06',
    status: 'Em andamento',
    email: 'beatriz@email.com',
    whatsapp: '11900000000',
  },
];

export default function Dashboard() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [openLeadMenuId, setOpenLeadMenuId] = useState<number | null>(null);
  const [openDealMenuId, setOpenDealMenuId] = useState<number | null>(null);
  const leadMenuRef = useRef<HTMLDivElement>(null);
  const dealMenuRef = useRef<HTMLDivElement>(null);

  const handleClearDates = () => {
    setDateRange([null, null]);
    // Limpa os inputs de data
    const dateInputs = document.querySelectorAll<HTMLInputElement>('input[type="date"]');
    dateInputs.forEach((input) => {
      input.value = '';
    });
  };

  useClickOutside(leadMenuRef, () => {
    setOpenLeadMenuId(null);
  });

  useClickOutside(dealMenuRef, () => {
    setOpenDealMenuId(null);
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Bem-vindo de volta, aqui está um resumo do seu CRM</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="px-3 py-2 border-r border-gray-200 dark:border-gray-700">
              <Calendar size={20} className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="date"
              className="px-3 py-2 bg-transparent border-r border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300"
              onChange={(e) => setDateRange([new Date(e.target.value), dateRange[1]])}
            />
            <input
              type="date"
              className="px-3 py-2 bg-transparent text-sm text-gray-600 dark:text-gray-300"
              onChange={(e) => setDateRange([dateRange[0], new Date(e.target.value)])}
            />
            {(dateRange[0] || dateRange[1]) && (
              <button
                onClick={handleClearDates}
                className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-r-lg"
                title="Limpar datas"
              >
                <X size={20} className="text-gray-500 dark:text-gray-400" />
              </button>
            )}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter size={20} className="text-gray-500 dark:text-gray-400" />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={`flex items-center text-sm ${
                    stat.isPositive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div id='leads-recentes' className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-[350px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Leads Recentes
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              10 leads mais recentes
            </span>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto flex-1 -mx-6 px-6">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="py-3 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {lead.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(lead.date).toLocaleDateString('pt-BR')}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {lead.product}
                    </p>
                  </div>
                </div>
                
                <div className="relative ml-4" ref={leadMenuRef}>
                  <button
                    onClick={() => setOpenLeadMenuId(openLeadMenuId === lead.id ? null : lead.id)}
                    className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  
                  {openLeadMenuId === lead.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                      <a
                        href={`https://wa.me/${lead.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${lead.email}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Mail className="w-4 h-4" />
                        E-mail
                      </a>
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Eye className="w-4 h-4" />
                        Ver detalhes
                      </button>
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <BookmarkPlus className="w-4 h-4" />
                        Salvar
                      </button>
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <UserMinus className="w-4 h-4" />
                        Inativar
                      </button>
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Send className="w-4 h-4" />
                        Enviar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="negocios-recentes" className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm h-[350px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Negócios Recentes
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              10 negócios mais recentes
            </span>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto flex-1 -mx-6 px-6">
            {recentDeals.map((deal) => (
              <div key={deal.id} className="py-3 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {deal.clientName}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(deal.openDate).toLocaleDateString('pt-BR')}
                    </p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      deal.status === 'Ganho' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      deal.status === 'Perdido' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                      deal.status === 'Em negociação' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      deal.status === 'Em andamento' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {deal.status}
                    </span>
                  </div>
                </div>
                
                <div className="relative ml-4" ref={dealMenuRef}>
                  <button
                    onClick={() => setOpenDealMenuId(openDealMenuId === deal.id ? null : deal.id)}
                    className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  
                  {openDealMenuId === deal.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Eye className="w-4 h-4" />
                        Ver negócio
                      </button>
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Users className="w-4 h-4" />
                        Ver contato
                      </button>
                      <a
                        href={`https://wa.me/${deal.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${deal.email}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Mail className="w-4 h-4" />
                        E-mail
                      </a>
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <ChartBar className="w-4 h-4" />
                        Mudar Status
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 