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
    slug: 'nyx-ranked-coach',
    initials: 'N',
    name: 'Nyx Ranked Coach',
    headline: 'Coach de Valorant para subir rank, leer rondas y ganar consistencia competitiva',
    category: 'Expertos gaming',
    game: 'Valorant',
    price: 29,
    priceLabel: '29 € / sesión',
    rating: '4.9',
    sessionsLabel: '128 sesiones',
    responseTime: '< 1h',
    languages: ['Español', 'English'],
    tags: ['Valorant', 'VOD review', 'Aim', 'Ascenso de rank'],
    description:
      'Nyx trabaja con jugadores entre oro y radiante. La sesión mezcla review rápida, corrección de hábitos, plan de mejora semanal y foco en decisiones que realmente cambian partidas.',
    transformation: 'En 3-4 sesiones suele corregir errores de posicionamiento, timings y control emocional que frenan el ascenso.',
    deliverables: ['Diagnóstico inicial', 'Sesión 1:1 de 60 min', 'Checklist post-sesión', 'Plan de mejora por Discord interno'],
    rules: ['Prohibido compartir contacto externo en la sesión', 'Pagos y reprogramaciones gestionados dentro de Guilda'],
    slots: [slotSet('2026-04-21', 18, 1), slotSet('2026-04-22', 19, 2), slotSet('2026-04-24', 18, 3), slotSet('2026-04-26', 11, 4)],
    reviews: [
      { author: 'Iván', role: 'Jugador diamante', quote: 'Me hizo ver errores que repetía siempre. La sesión fue muy accionable.', rating: '5.0' },
      { author: 'Lucía', role: 'Main sentinel', quote: 'El plan de mejora semanal vale mucho más de lo que cuesta.', rating: '4.8' },
    ],
  },
  {
    slug: 'kai-duo-queue',
    initials: 'K',
    name: 'Kai Duo Queue',
    headline: 'Partner premium de League of Legends para duo queue, macro y mental competitivo',
    category: 'Duo queue',
    game: 'League of Legends',
    price: 21,
    priceLabel: '21 € / hora',
    rating: '4.8',
    sessionsLabel: '96 reservas',
    responseTime: '< 2h',
    languages: ['Español'],
    tags: ['LoL', 'DuoQ', 'Macro', 'Jungla y mid'],
    description:
      'Kai convierte la duo queue en una sesión guiada: analiza tus errores en partida, te enseña a tomar decisiones bajo presión y te ayuda a jugar con objetivos claros.',
    transformation: 'Ideal para jugadores estancados entre plata y esmeralda que necesitan claridad de macro y mentalidad.',
    deliverables: ['Sesión dúo de 60 min', 'Revisión rápida de draft', 'Resumen de errores clave', 'Consejos de adaptación por parche'],
    rules: ['No se facilita contacto privado fuera de la plataforma', 'Las sesiones se hacen con reserva confirmada'],
    slots: [slotSet('2026-04-21', 20, 1), slotSet('2026-04-23', 21, 2), slotSet('2026-04-25', 17, 3), slotSet('2026-04-27', 19, 4)],
    reviews: [
      { author: 'Marta', role: 'ADC oro', quote: 'Sentí que jugaba con alguien que enseñaba de verdad, no solo que carreaba.', rating: '4.9' },
      { author: 'Pablo', role: 'Main mid', quote: 'Muy bueno explicando resets y tempos. Repetiría sin duda.', rating: '4.8' },
    ],
  },
  {
    slug: 'astra-tactics',
    initials: 'A',
    name: 'Astra Tactics',
    headline: 'Mentora de Fortnite para builds, peeks y control de ritmo en competitivo',
    category: 'Coaching mecánico',
    game: 'Fortnite',
    price: 24,
    priceLabel: '24 € / sesión',
    rating: '5.0',
    sessionsLabel: '74 reviews',
    responseTime: '< 30 min',
    languages: ['Español', 'English'],
    tags: ['Fortnite', 'Training', 'Beginner friendly', 'Competitive'],
    description:
      'Astra plantea sesiones energéticas y muy visuales, con ejercicios rápidos para ganar consistencia en edits, peeks, lectura de altura y calma competitiva.',
    transformation: 'Pensada para jugadores que quieren notar mejora en una semana, no solo recibir teoría.',
    deliverables: ['Sesión 1:1', 'Rutina de warm-up', 'Ejercicios de peeks', 'Resumen final de prioridades'],
    rules: ['Toda la comunicación comercial se mantiene dentro de Guilda', 'No se aceptan pagos ni acuerdos externos'],
    slots: [slotSet('2026-04-22', 18, 1), slotSet('2026-04-23', 18, 2), slotSet('2026-04-25', 12, 3), slotSet('2026-04-26', 18, 4)],
    reviews: [
      { author: 'Raúl', role: 'Jugador competitivo', quote: 'Muy top para detectar por qué pierdes fights aunque tengas mecánicas decentes.', rating: '5.0' },
      { author: 'Noa', role: 'Jugadora casual', quote: 'Explica sin humillar y te deja tareas claras. Súper recomendable.', rating: '5.0' },
    ],
  },
  {
    slug: 'orion-aim-room',
    initials: 'O',
    name: 'Orion Aim Room',
    headline: 'Especialista en aim y micro para shooters tácticos con seguimiento semanal',
    category: 'Aim lab premium',
    game: 'Valorant / CS2',
    price: 35,
    priceLabel: '35 € / sesión',
    rating: '4.9',
    sessionsLabel: '112 sesiones',
    responseTime: '< 1h',
    languages: ['Español'],
    tags: ['Aim', 'Valorant', 'CS2', 'Rutinas'],
    description:
      'Orion trabaja microfundamentos: colocación de crosshair, disciplina en duelos, calentamientos y hábitos que hacen que tu aim aguante también en presión real.',
    transformation: 'Perfecto para jugadores que ya entienden el juego pero no ganan suficientes duelos.',
    deliverables: ['Plan de aim', 'Sesión 60 min', 'Rutina personalizada', 'Seguimiento semanal'],
    rules: ['No se intercambia contacto fuera de Guilda', 'Toda modificación pasa por la reserva de la plataforma'],
    slots: [slotSet('2026-04-21', 17, 1), slotSet('2026-04-24', 20, 2), slotSet('2026-04-26', 17, 3), slotSet('2026-04-27', 20, 4)],
    reviews: [
      { author: 'Jorge', role: 'Ascendant 2', quote: 'Los cambios en crosshair placement se notan enseguida.', rating: '4.9' },
      { author: 'Aina', role: 'Jugadora CS2', quote: 'Muy técnico y ordenado. Parece un producto premium.', rating: '4.8' },
    ],
  },
];

export const categories = [
  'Valorant',
  'League of Legends',
  'Fortnite',
  'CS2',
  'Coaching competitivo',
  'Duo queue',
  'Aim training',
  'Squads y teams',
];

export const metrics = [
  { value: '4.9★', label: 'valoración media de la plataforma' },
  { value: '12%', label: 'comisión objetivo por reserva' },
  { value: '< 3 min', label: 'tiempo de reserva desde ficha a checkout' },
];

export const howItWorks = [
  {
    order: 1,
    title: 'Registro por rol',
    text: 'Cliente y experto entran por flujos distintos. El experto configura precio, bio, disponibilidad y acepta las condiciones de Guilda.',
  },
  {
    order: 2,
    title: 'Reserva con calendario',
    text: 'El cliente elige experto, slot, deja una nota previa y pasa a un checkout tipo Stripe listo para producción.',
  },
  {
    order: 3,
    title: 'Comisión y payout',
    text: 'La plataforma cobra, retiene la comisión y deja el payout del experto listo para automatizar con Stripe Connect.',
  },
];

export const testimonials = [
  {
    name: 'Marcos',
    context: 'cliente demo · Valorant',
    quote: 'La ficha transmite mucha confianza y reservar es rapidísimo. Parece un producto listo para pagar.',
  },
  {
    name: 'Lucía',
    context: 'experta demo · LoL',
    quote: 'Poder poner mi precio, disponibilidad y condiciones en un flujo tan claro me ahorra mucho tiempo.',
  },
  {
    name: 'Carlos',
    context: 'operaciones demo',
    quote: 'Lo más valioso es que ya se ve cómo escalar a otros sectores sin rehacer el core de reservas.',
  },
];

export const bookings = [
  {
    id: 'b1',
    client: 'Álvaro Ruiz',
    expert: 'Nyx Ranked Coach',
    status: 'Pagada',
    date: 'Mar · 19:00',
    amount: '29 €',
  },
  {
    id: 'b2',
    client: 'Noa Vidal',
    expert: 'Kai Duo Queue',
    status: 'Pendiente',
    date: 'Jue · 21:00',
    amount: '21 €',
  },
  {
    id: 'b3',
    client: 'Javier P.',
    expert: 'Orion Aim Room',
    status: 'Confirmada',
    date: 'Dom · 17:00',
    amount: '35 €',
  },
  {
    id: 'b4',
    client: 'Sara Torres',
    expert: 'Astra Tactics',
    status: 'Completada',
    date: 'Sáb · 12:00',
    amount: '24 €',
  },
];

export const dashboardMetrics = [
  { value: '2.480 €', label: 'GMV demo mensual' },
  { value: '298 €', label: 'comisión demo mensual' },
  { value: '41', label: 'reservas cerradas' },
  { value: '87%', label: 'ocupación slots top expertos' },
];

export const expertPerks = [
  'Perfil público premium con posicionamiento claro',
  'Checkout listo para Stripe y control de comisiones',
  'Calendario con slots visibles para el cliente',
  'Normas del marketplace integradas en el onboarding',
];

export const clientBenefits = [
  'Reserva en pocos clics con transparencia total',
  'Expertos filtrables por juego, precio y estilo',
  'Mejoras medibles con servicios bien definidos',
  'Soporte y reglas que protegen la operación',
];

export const platformRules = [
  'Queda prohibido mantener contacto con los clientes fuera de la plataforma.',
  'Toda modificación de precio, horario o condiciones debe hacerse dentro de Guilda.',
  'Los expertos aceptan que Guilda pueda aplicar comisión y gestionar pagos.',
];

export const stripeSetupNotes = [
  'Añade STRIPE_SECRET_KEY en Vercel para activar el checkout real.',
  'Añade NEXT_PUBLIC_APP_URL con el dominio de producción.',
  'Para payouts reales, el siguiente paso es integrar Stripe Connect Express para expertos.',
];
