'use client';

import { useState } from 'react';
import { Search, HelpCircle, PlayCircle, MessageCircle, Send, Bug } from 'lucide-react';

type TabType = 'faq' | 'tutoriais' | 'suporte' | 'feedback' | 'bug';

const tabs = [
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'tutoriais', label: 'Tutoriais', icon: PlayCircle },
  { id: 'suporte', label: 'Suporte', icon: MessageCircle },
  { id: 'feedback', label: 'Feedback', icon: Send },
  { id: 'bug', label: 'Reportar Bug', icon: Bug },
] as const;

const faqItems = [
  {
    question: 'Como adicionar um novo contato?',
    answer: 'Para adicionar um novo contato, acesse a página de Contatos e clique no botão "Novo Contato" no canto superior direito. Preencha as informações necessárias e clique em "Salvar".',
  },
  {
    question: 'Como exportar relatórios?',
    answer: 'Na página de Relatórios, selecione o tipo de relatório desejado e o período. Em seguida, clique no botão "Exportar" e escolha o formato desejado (PDF, Excel, etc).',
  },
];

const tutorials = [
  {
    title: 'Primeiros passos com o TecnoLeads',
    duration: '5:30',
    thumbnail: 'https://picsum.photos/400/225',
  },
  {
    title: 'Gerenciando negócios eficientemente',
    duration: '8:45',
    thumbnail: 'https://picsum.photos/400/225',
  },
];

export default function Ajuda() {
  const [activeTab, setActiveTab] = useState<TabType>('faq');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Central de Ajuda</h1>
        <p className="text-gray-600 dark:text-gray-300">Encontre respostas para suas dúvidas</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar ajuda..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
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
          {activeTab === 'faq' && (
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tutoriais' && (
            <div className="grid sm:grid-cols-2 gap-6">
              {tutorials.map((tutorial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
                >
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Duração: {tutorial.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'suporte' && (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Entre em contato com o suporte
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                      placeholder="Digite o assunto da sua mensagem"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-32"
                      placeholder="Descreva em detalhes como podemos ajudar"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Envie seu feedback
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tipo de Feedback
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <option value="sugestao">Sugestão</option>
                      <option value="elogio">Elogio</option>
                      <option value="critica">Crítica</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-32"
                      placeholder="Compartilhe sua experiência ou sugestões"
                    ></textarea>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Enviar Feedback
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bug' && (
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Reportar um Bug
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Título do Bug
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                      placeholder="Descreva o bug em poucas palavras"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Descrição Detalhada
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-32"
                      placeholder="Descreva o que aconteceu e como reproduzir o bug"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Anexar Screenshot
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-700 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Clique para fazer upload</span> ou arraste e solte
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX. 2MB)</p>
                        </div>
                        <input type="file" className="hidden" accept="image/*" />
                      </label>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Enviar Relatório
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 