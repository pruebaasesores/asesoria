export type Slot = {
  id: string;
  label: string;
  dateLabel: string;
  isoStart: string;
  isoEnd: string;
  available: boolean;
};

export type Review = {
  author: string;
  role: string;
  quote: string;
  rating: string;
};

export type Expert = {
  slug: string;
  initials: string;
  name: string;
  headline: string;
  category: string;
  game: string;
  gameKey: 'fortnite' | 'valorant' | 'lol';
  price: number;
  priceLabel: string;
  rating: string;
  sessionsLabel: string;
  responseTime: string;
  languages: string[];
  tags: string[];
  description: string;
  transformation: string;
  deliverables: string[];
  rules: string[];
  slots: Slot[];
  reviews: Review[];
};

const slotSet = (baseDay: string, hour: number, index: number): Slot => {
  const start = new Date(`${baseDay}T${String(hour).padStart(2, '0')}:00:00.000Z`);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const day = start.toLocaleDateString('es-ES', { weekday: 'short', day: '2-digit', month: 'short' });
  const time = start.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });

  return {
    id: `${baseDay}-${hour}-${index}`,
    label: `${day} · ${time}`,
    dateLabel: day,
    isoStart: start.toISOString(),
    isoEnd: end.toISOString(),
    available: true,
  };
};

export const experts: Expert[] = [
  {
    slug: 'nyx-protocol',
    initials: 'N',
    name: 'Nyx Protocol',
    headline: 'Coach de Valorant para subir rank con mejor macro, lectura de rondas y disciplina mecánica',
    category: 'Valorant coaching',
    game: 'Valorant',
    gameKey: 'valorant',
    price: 29,
    priceLabel: '29 € / sesión',
    rating: '4.9',
    sessionsLabel: '148 sesiones',
    responseTime: '< 1h',
    languages: ['Español', 'English'],
    tags: ['VOD review', 'Aim', 'Macro', 'Ascenso de rank'],
    description:
      'Nyx trabaja con jugadores que quieren dejar de perder rounds por malos timings y decisiones blandas. La sesión va directa al error que más te cuesta Elo.',
    transformation:
      'Ideal si estás entre oro e inmortal y necesitas un plan serio para ganar consistencia en ranked.',
    deliverables: ['Diagnóstico inicial', 'Sesión 1:1 de 60 min', 'Checklist post-sesión', 'Plan de mejora semanal'],
    rules: [
      'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
      'Pagos, cambios y reprogramaciones se gestionan dentro de Guilda.',
    ],
    slots: [slotSet('2026-04-21', 18, 1), slotSet('2026-04-22', 19, 2), slotSet('2026-04-24', 18, 3), slotSet('2026-04-26', 11, 4)],
    reviews: [
      { author: 'Iván', role: 'Jugador diamante', quote: 'En una sola sesión me corrigió vicios que llevaba meses repitiendo.', rating: '5.0' },
      { author: 'Lucía', role: 'Main sentinel', quote: 'Muy claro, muy premium y con tareas que de verdad sirven.', rating: '4.8' },
    ],
  },
  {
    slug: 'orbit-crosshair-lab',
    initials: 'O',
    name: 'Orbit Crosshair Lab',
    headline: 'Especialista en aim para jugadores de Valorant que quieren ganar más duelos y jugar con orden',
    category: 'Valorant aim',
    game: 'Valorant',
    gameKey: 'valorant',
    price: 35,
    priceLabel: '35 € / sesión',
    rating: '4.9',
    sessionsLabel: '112 sesiones',
    responseTime: '< 45 min',
    languages: ['Español'],
    tags: ['Aim', 'Crosshair placement', 'Micro', 'Rutina'],
    description:
      'Orbit se centra en fundamentos: crosshair placement, disciplina en duelos, calentamiento útil y hábitos que aguantan incluso bajo presión competitiva.',
    transformation:
      'Perfecto para jugadores con buena lectura del juego que siguen perdiendo más duelos de los que deberían.',
    deliverables: ['Plan de aim', 'Sesión de 60 min', 'Rutina personalizada', 'Objetivos semanales'],
    rules: [
      'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
      'Toda gestión comercial se mantiene dentro de Guilda.',
    ],
    slots: [slotSet('2026-04-21', 17, 1), slotSet('2026-04-24', 20, 2), slotSet('2026-04-26', 17, 3), slotSet('2026-04-27', 20, 4)],
    reviews: [
      { author: 'Jorge', role: 'Ascendant 2', quote: 'Me ayudó a ordenar mi aim y ahora juego mucho más limpio.', rating: '4.9' },
      { author: 'Aina', role: 'Main duelist', quote: 'Muy técnico y fácil de aplicar el mismo día.', rating: '4.8' },
    ],
  },
  {
    slug: 'astra-elite',
    initials: 'A',
    name: 'Astra Elite',
    headline: 'Coach de Fortnite para mejorar builds, peeks, control de altura y calma competitiva',
    category: 'Fortnite coaching',
    game: 'Fortnite',
    gameKey: 'fortnite',
    price: 24,
    priceLabel: '24 € / sesión',
    rating: '5.0',
    sessionsLabel: '89 sesiones',
    responseTime: '< 30 min',
    languages: ['Español', 'English'],
    tags: ['Builds', 'Peeks', 'Competitive', 'Beginner friendly'],
    description:
      'Astra plantea sesiones muy visuales y prácticas para jugadores que quieren notar mejora rápida en fights, edits y control de ritmo.',
    transformation:
      'Ideal para dejar atrás sesiones teóricas vacías y salir con ejercicios concretos desde el primer día.',
    deliverables: ['Sesión 1:1', 'Rutina de warm-up', 'Ejercicios de peeks', 'Resumen final'],
    rules: [
      'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
      'No se aceptan pagos ni acuerdos externos.',
    ],
    slots: [slotSet('2026-04-22', 18, 1), slotSet('2026-04-23', 18, 2), slotSet('2026-04-25', 12, 3), slotSet('2026-04-26', 18, 4)],
    reviews: [
      { author: 'Raúl', role: 'Jugador competitivo', quote: 'Te detecta enseguida por qué pierdes fights aunque tengas mecánicas decentes.', rating: '5.0' },
      { author: 'Noa', role: 'Jugadora casual', quote: 'Explica muy bien y te deja tareas súper claras.', rating: '5.0' },
    ],
  },
  {
    slug: 'vex-boxfight-sense',
    initials: 'V',
    name: 'Vex Boxfight Sense',
    headline: 'Entrenador de Fortnite para boxfights, retakes y toma de decisiones en late game',
    category: 'Fortnite mechanics',
    game: 'Fortnite',
    gameKey: 'fortnite',
    price: 27,
    priceLabel: '27 € / sesión',
    rating: '4.8',
    sessionsLabel: '73 sesiones',
    responseTime: '< 1h',
    languages: ['Español'],
    tags: ['Boxfights', 'Retakes', 'Late game', 'Custom routine'],
    description:
      'Vex trabaja decisiones bajo presión y lectura de espacios para que tu mecánica tenga contexto competitivo y no se quede en clips bonitos.',
    transformation:
      'Muy fuerte para jugadores que ya construyen rápido, pero juegan mal las situaciones de cierre.',
    deliverables: ['Diagnóstico de gameplay', 'Sesión 60 min', 'Rutina de drills', 'Foco de mejora semanal'],
    rules: [
      'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
      'Toda modificación de precio o horario debe hacerse en Guilda.',
    ],
    slots: [slotSet('2026-04-21', 19, 1), slotSet('2026-04-24', 19, 2), slotSet('2026-04-26', 16, 3), slotSet('2026-04-27', 18, 4)],
    reviews: [
      { author: 'Alex', role: 'Jugador arena', quote: 'Me puso drills mucho mejores que los que estaba haciendo por mi cuenta.', rating: '4.9' },
      { author: 'Lara', role: 'Jugadora rankeada', quote: 'Muy buena energía y muy accionable.', rating: '4.7' },
    ],
  },
  {
    slug: 'kai-macro-duoq',
    initials: 'K',
    name: 'Kai Macro DuoQ',
    headline: 'Coach de League of Legends para duo queue, macro, tempo y decisiones limpias en soloQ',
    category: 'LoL coaching',
    game: 'League of Legends',
    gameKey: 'lol',
    price: 21,
    priceLabel: '21 € / hora',
    rating: '4.8',
    sessionsLabel: '104 reservas',
    responseTime: '< 2h',
    languages: ['Español'],
    tags: ['DuoQ', 'Macro', 'Mid/Jungle', 'Mental competitivo'],
    description:
      'Kai convierte una duo queue en una sesión guiada: analiza tus errores en partida, corrige resets, tempos y visión, y te ayuda a jugar con intención.',
    transformation:
      'Especialmente útil si estás estancado entre plata y esmeralda y necesitas claridad de macro.',
    deliverables: ['Sesión dúo de 60 min', 'Revisión de draft', 'Resumen de errores clave', 'Consejos por parche'],
    rules: [
      'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
      'Las sesiones se hacen con reserva confirmada dentro de Guilda.',
    ],
    slots: [slotSet('2026-04-21', 20, 1), slotSet('2026-04-23', 21, 2), slotSet('2026-04-25', 17, 3), slotSet('2026-04-27', 19, 4)],
    reviews: [
      { author: 'Marta', role: 'ADC oro', quote: 'No solo juega contigo, te enseña mientras juegas.', rating: '4.9' },
      { author: 'Pablo', role: 'Main mid', quote: 'Muy bueno explicando tempos y decisiones de mapa.', rating: '4.8' },
    ],
  },
  {
    slug: 'lumen-laning-academy',
    initials: 'L',
    name: 'Lumen Laning Academy',
    headline: 'Mentoría de League of Legends para laning, wave control y macro de mid game',
    category: 'LoL laning',
    game: 'League of Legends',
    gameKey: 'lol',
    price: 26,
    priceLabel: '26 € / sesión',
    rating: '4.9',
    sessionsLabel: '67 sesiones',
    responseTime: '< 1h',
    languages: ['Español', 'English'],
    tags: ['Wave control', 'Laning', 'Review', 'Subida de elo'],
    description:
      'Lumen trabaja desde los fundamentos que más Elo regalan: trades, gestión de oleadas, resets y cómo llegar fuerte al mid game sin jugar al azar.',
    transformation:
      'Ideal para quien siente que llega tarde a todo, pierde prioridad gratis y no convierte ventajas pequeñas.',
    deliverables: ['Review de partida', 'Sesión 1:1', 'Checklist de línea', 'Plan de foco'],
    rules: [
      'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
      'Pagos y cambios se tramitan dentro de Guilda.',
    ],
    slots: [slotSet('2026-04-22', 20, 1), slotSet('2026-04-24', 18, 2), slotSet('2026-04-26', 20, 3), slotSet('2026-04-27', 17, 4)],
    reviews: [
      { author: 'Dani', role: 'Top platino', quote: 'Me ordenó toda la fase de líneas en una sesión.', rating: '5.0' },
      { author: 'Sofía', role: 'Main support', quote: 'Muy buena para entender el porqué de cada decisión.', rating: '4.8' },
    ],
  },
];

export const categories = [
  'Valorant',
  'Fortnite',
  'League of Legends',
  '1:1 coaching',
  'Duo queue',
  'VOD review',
  'Aim',
  'Macro',
];

export const metrics = [
  { value: '3 juegos', label: 'foco inicial para dominar la categoría' },
  { value: '12%', label: 'comisión objetivo por reserva' },
  { value: '< 3 min', label: 'de ficha a checkout en el flujo ideal' },
];

export const howItWorks = [
  {
    order: 1,
    title: 'Explora y compara coaches',
    text: 'El jugador entra, elige juego y detecta rápido qué perfil encaja por estilo, precio y propuesta.',
  },
  {
    order: 2,
    title: 'Elige horario y reserva',
    text: 'La ficha muestra slots disponibles. Se selecciona uno, se deja una nota y se pasa a pago.',
  },
  {
    order: 3,
    title: 'Todo queda dentro de Guilda',
    text: 'Precio, pago, reglas y relación comercial se mantienen dentro de la plataforma para proteger la operación.',
  },
];

export const testimonials = [
  {
    name: 'Marcos',
    context: 'jugador de Valorant',
    quote: 'La web te hace sentir que vas a reservar a alguien serio, no a perder tiempo buscando coach por Discord.',
  },
  {
    name: 'Lucía',
    context: 'coach de LoL',
    quote: 'Por fin una experiencia gamer donde poner precio, propuesta y disponibilidad tiene sentido comercial.',
  },
  {
    name: 'Carlos',
    context: 'jugador de Fortnite',
    quote: 'Lo mejor es que en segundos entiendes quién te ayuda, cuánto cuesta y cuándo puedes reservar.',
  },
];

export const dashboardMetrics = [
  { value: '3.240 €', label: 'GMV mensual estimado' },
  { value: '388 €', label: 'comisión mensual estimada' },
  { value: '54', label: 'reservas cerradas' },
  { value: '82%', label: 'ocupación de slots top coaches' },
];

export const expertPerks = [
  'Perfil premium con propuesta clara y precio visible',
  'Calendario con slots listos para reservar',
  'Checkout listo para Stripe y control de comisión',
  'Regla operativa integrada para proteger la plataforma',
];

export const bookings = [
  {
    id: 'b1',
    client: 'Álvaro Ruiz',
    expert: 'Nyx Protocol',
    status: 'Pagada',
    date: 'Mar · 19:00',
    amount: '29 €',
  },
  {
    id: 'b2',
    client: 'Noa Vidal',
    expert: 'Kai Macro DuoQ',
    status: 'Pendiente',
    date: 'Jue · 21:00',
    amount: '21 €',
  },
  {
    id: 'b3',
    client: 'Javier P.',
    expert: 'Orbit Crosshair Lab',
    status: 'Confirmada',
    date: 'Dom · 17:00',
    amount: '35 €',
  },
  {
    id: 'b4',
    client: 'Sara Torres',
    expert: 'Astra Elite',
    status: 'Completada',
    date: 'Sáb · 12:00',
    amount: '24 €',
  },
];

export const platformRules = [
  'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
];

export const stripeSetupNotes = [
  'Añade STRIPE_SECRET_KEY en Vercel para activar checkout real.',
  'Añade NEXT_PUBLIC_APP_URL con tu dominio de producción.',
  'El siguiente paso natural es Stripe Connect para payouts automáticos a coaches.',
];
