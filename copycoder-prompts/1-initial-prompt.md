Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
CRM Dashboard Rsponsivo com função dark-mode
</summary_title>

<image_analysis>

1. Navigation Elements:
- Left sidebar with: Dashboard, Contatos, Negócios, Relatórios, Usuários
- Sidebar footer: Reportar Bug, Enviar Feedback, Suporte, Sair
- Settings section with: Notificações, Ajuda, Meu Perfil, Sair
- Top bar with: Notificações, toggle dark-mode, perfil

2. Layout Components:
- Left sidebar: 250px width, dark theme
- Main content area: Flexible width
- Top stats cards: 4 equal columns with 24px gap
- Chart section: Full width with 32px padding
- Calendar widget: Fixed width with 7-column grid
- Schedule section: List layout with 16px spacing


3. Content Sections:
- Overview stats cards (4 metrics)
- Sales overview chart
- Desktop/Mobile users comparison
- Calendar widget
- Upcoming schedule list
- User profile section


4. Interactive Controls:
- Search bar with filter button
- Chart toggle between Profit/Expense
- Calendar date selection
- Schedule item checkboxes
- Navigation menu items with hover states


5. Colors:
- Primary: #00167A (Blue)
- Background: #f3f3f3 (Light grey)
- Text: #333333 (Dark grey)
- Secondary: #d10413 (Red)
- Accent: #FF4B4B (Red for negative values)
- Dark mode: #1a1a1a (Dark grey)



6. Grid/Layout Structure:
- 12-column grid system
- 24px base grid gap
- Responsive breakpoints at 320px, 768px, 1024px, 1440px, 1600px
- Flexible container with max-width 1440px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar
│   │   ├── TopBar
│   │   └── MainContent
│   ├── features/
│   │   ├── Dashboard
│   │   ├── Contatos
│   │   ├── Negócios
│   │   ├── Relatórios
│   │   └── Usuários
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Real-time statistics dashboard
- Interactive sales chart
- Calendar integration
- Schedule management
- Theme switching
- User authentication


3. State Management:
```typescript
interface AppState {
├── user: {
│   ├── profile: UserProfile
│   ├── preferences: UserPreferences
│   └── settings: UserSettings
├── dashboard: {
│   ├── stats: DashboardStats
│   ├── salesData: SalesData[]
│   └── schedule: ScheduleItem[]
├── contatos: {
│   ├── contatos: Contatos[]
│   └── contatosData: ContatosData[]
├── negocios: {
│   ├── negocios: Negócios[]
│   └── negociosData: NegóciosData[]
├── relatorios: {
│   ├── relatorios: Relatórios[]
│   └── relatoriosData: RelatóriosData[]
├── usuarios: {
│   ├── usuarios: Usuários[]
│   └── usuariosData: UsuáriosData[]
}
}
```


4. Routes:
```typescript
const routes = [
├── '/dashboard',
├── '/contatos/*',
├── '/negocios/*',
├── '/relatorios/*',
├── '/usuarios/*',
└── '/sair'
]
```


5. Component Architecture:
- DashboardLayout (parent)
- StatisticsCards (reusable)
- SalesChart (with D3.js)
- CalendarWidget (custom)
- ScheduleList (with virtualization)
- UserProfile (custom)
- UserPreferences (custom)
- UserSettings (custom)
- UserNotifications (custom)
- UserHelp (custom)
- UserLogout (custom)



6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px,
└── 'ultra-wide': 1600px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.