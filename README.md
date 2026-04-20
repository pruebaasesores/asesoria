# Guilda

Marketplace premium para conectar expertos con clientes mediante reservas y comisiones automáticas.

## Posicionamiento inicial
Guilda nace para **gamers y coaches de gaming**, pero la arquitectura está preparada para crecer hacia cualquier vertical:
- coaching
- idiomas
- diseño
- fitness
- tecnología
- consultoría

## Stack
- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (Auth + Postgres + RLS)
- **Vercel** para despliegue

## Incluye
- landing premium
- página de exploración de expertos
- pantalla de onboarding para expertos y clientes
- estructura lista para conectar Supabase
- identidad visual y logo SVG
- SQL completo para Supabase

## Arranque local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables necesarias

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## SQL
Ejecuta el archivo:

```bash
supabase/schema.sql
```

o pégalo en el SQL Editor de Supabase.

## Roadmap sugerido
1. Conectar Supabase Auth
2. Crear onboarding real del experto
3. Integrar Stripe Connect
4. Construir disponibilidad y reservas
5. Añadir reviews, payouts y panel admin

## Estructura de negocio
- el cliente reserva y paga
- la plataforma aplica comisión
- el experto recibe payout
- la reputación crece con reviews verificadas

## Marca
Nombre propuesto: **Guilda**

Idea de marca:
- “guild” transmite comunidad, skill y pertenencia
- suena premium, corto y memorable
- sirve para gaming hoy y expertos mañana
