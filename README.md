# Guilda

Demo premium de un marketplace para expertos y clientes, empezando por gaming.

## Qué incluye
- registro separado para cliente y experto
- experto con precio editable y aceptación de condiciones
- marketplace con perfiles premium
- ficha de experto con calendario y reserva
- checkout preparado para Stripe o fallback demo
- dashboard de operaciones

## Ejecutar en local
```bash
npm install
npm run dev
```

## Deploy en Vercel
Selecciona **Next.js** como preset.

### Variables opcionales para Stripe real
```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

Si no añades `STRIPE_SECRET_KEY`, el checkout funciona en modo demo y redirige a la página de éxito.

## Siguiente integración recomendada
- Supabase Auth y base de datos
- Stripe Connect Express para payouts a expertos
- persistencia real de slots, reservas y pagos
