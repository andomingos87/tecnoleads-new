Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /dashboard
- /contatos
- /negocios
- /relatorios
- /usuarios
- /mensagens
- /configuracoes
- /sair
- /reportar-bug
- /enviar-feedback
- /suporte
- /toggle-dark-mode
- /profile

Page Implementations:
/dashboard:
Core Purpose: Dashboard showing key business metrics and performance overview
Key Components
- Revenue

/analytics:
Core Purpose: Detailed business analytics and reporting
Key Components
- Interactive data visualizations
- Custom date range selector
- Export functionality
- Filtering options
Layout Structure
- Full-width charts
- Collapsible sidebar filters
- Tabbed interface for different metrics

/negocios:
Core Purpose: Acompanhar e gerenciar negócios dentro do CRM, visualizando detalhes e status de cada oportunidade.

Key Components
- Business Status Cards: Exibição clara do status do negócio (Fazer orçamento, Acompanhando, Negociando, Ganho, Perdido).
- Business Details Panel: Exibição de informações relevantes sobre cada negócio, incluindo cliente, valor, prazo e histórico de interações.
- Actionable Insights: Sugestões e lembretes para ajudar o usuário a avançar negociações.
- Filter & Search Sidebar: Filtros para segmentação por status, valor, cliente e data.

Layout Structure
- Masonry Grid Layout: Organização visual intuitiva para melhor leitura dos negócios.
- Scrollable Feed: Permite navegação fluida pelos negócios.
- Sidebar de Filtros: Facilita a busca e organização de negócios conforme critérios específicos.

/contatos
Core Purpose: Gerenciar e visualizar a lista de leads, contatos ativos e inativados, incluindo os motivos de inativação.

Key Components
- Lead Cards: Exibição dos novos leads captados.
- Contact List: Listagem dos contatos ativos com detalhes relevantes (nome, empresa, status, última interação).
- Inactive Contacts Section: Exibição dos contatos inativados com os respectivos motivos de inativação.
- Search & Filters: Filtros para segmentação por status, data de criação, origem do lead e motivo de inativação.

Layout Structure
- Tabbed Navigation: Separação clara entre "Novos Leads", "Contatos Ativos" e "Inativados".
- Scrollable List: Facilidade na navegação pelos contatos.
- Sidebar de Filtros: Organização e segmentação rápida dos contatos conforme critérios específicos.


/configuracoes
Core Purpose: Personalizar configurações da conta, segurança e preferências de notificação.

Key Components
- Account Settings: Atualização de informações do usuário (nome, e-mail, senha, idioma).
- Security & Access Control: Configuração de autenticação em dois fatores (2FA), gerenciamento de dispositivos e permissões de acesso.
- Notification Preferences: Definição de alertas e notificações (e-mail, push, WhatsApp).
- Subscription & Billing: Visualização e gerenciamento do plano de assinatura e faturamento.

Layout Structure
- Tabbed Interface: Organização por seções: Conta, Segurança, Notificações, Assinatura.
- Sidebar Navigation: Menu lateral para fácil acesso às configurações.
- Expandable Sections: Melhor usabilidade ao agrupar configurações por categorias.

/ajuda
Core Purpose: Facilitar o acesso a informações e suporte, permitindo que o usuário encontre respostas rápidas e entre em contato com a equipe de suporte.

Key Components
- FAQ Search: Campo de busca para encontrar perguntas frequentes rapidamente.
- Tutorials Section: Guias e vídeos explicativos sobre o uso da plataforma.
- Support Contact Options:
Enviar mensagem ao suporte via chat ou ticket.
Enviar e-mail para suporte.
- Feedback & Bug Reporting:
Formulário para feedback sobre a plataforma.
Relatório de bugs com opção de anexar capturas de tela.
Layout Structure
Tabbed Interface: Organização por seções: FAQ, Tutoriais, Suporte, Feedback, Reportar Bug.
Search Bar: Facilita a busca por informações na base de conhecimento.
Quick Action Buttons: Acesso rápido para enviar mensagens, feedback ou relatar problemas.

/pesquisa:
Core Purpose: Global search functionality
Key Components
- Search input
- Filters
- Results display
- Recent searches
Layout Structure
- Full-width search bar
- Results grid

/notificacoes:
Core Purpose: System and activity notifications
Key Components
- Notification list
- Read

/unread-states:
- Action buttons
- Filters
Layout Structure:
- Chronological list
- Quick actions
- Filter options

/toggle-dark-mode:
Core Purpose: Theme customization
Key Components
- Theme previews
- Color pickers
- Font settings
Layout Structure
- Preview panel
- Settings sidebar
- Apply button

/profile:
Core Purpose: User profile management
Key Components
- Profile information
- Activity history
- Preferences
- Security settings
Layout Structure
- Profile header
- Tab navigation
- Form sections

Layouts:
DashboardLayout:
- Applicable routes: All except /help-centre and /search
- Core components
  - Navigation sidebar
  - Header with search/notifications
  - User menu
  - Content area
- Responsive behavior
  - Collapsible sidebar on mobile
  - Sticky header
  - Responsive content area

FullWidthLayout
- Applicable routes: /help-centre, /search
- Core components
  - Minimal header
  - Full-width content
  - Footer
- Responsive behavior
  - Single column on mobile
  - Fluid width content
  - Sticky search bar
</page-structure-prompt>