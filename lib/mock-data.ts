export type Expert = {
  slug: string;
  initials: string;
  name: string;
  headline: string;
  priceLabel: string;
  rating: string;
  sessionsLabel: string;
  tags: string[];
  description: string;
};

export const experts: Expert[] = [
  {
    slug: 'nyx-ranked-coach',
    initials: 'N',
    name: 'Nyx Ranked Coach',
    headline: 'Coach de Valorant para subir rank y mejorar decisiones',
    priceLabel: '24 € / sesión',
    rating: '4.9',
    sessionsLabel: '126 sesiones',
    tags: ['Valorant', 'Coaching', 'Español / English'],
    description:
      'Sesiones 1:1 centradas en aim, lectura de rondas, utilidad y review de VOD para jugadores entre oro y ascendente.',
  },
  {
    slug: 'kai-duo-queue',
    initials: 'K',
    name: 'Kai Duo Queue',
    headline: 'Partner de dúo en League of Legends para ranked y mejora práctica',
    priceLabel: '18 € / hora',
    rating: '4.8',
    sessionsLabel: '93 reservas',
    tags: ['LoL', 'DuoQ', 'Noches'],
    description:
      'Ideal para jugadores que quieren aprender jugando: macro, decisiones en línea, rotaciones y mentalidad de partida.',
  },
  {
    slug: 'astra-tactics',
    initials: 'A',
    name: 'Astra Tactics',
    headline: 'Mentora de Fortnite para builds, peeks y consistencia competitiva',
    priceLabel: '21 € / sesión',
    rating: '5.0',
    sessionsLabel: '71 reviews',
    tags: ['Fortnite', 'Training', 'Beginner friendly'],
    description:
      'Entrenamiento práctico con foco en mecánicas, toma de peeks, control de ritmo y corrección de errores frecuentes.',
  },
  {
    slug: 'vex-igl-lab',
    initials: 'V',
    name: 'Vex IGL Lab',
    headline: 'Coaching táctico para squads y jugadores competitivos de FPS',
    priceLabel: '35 € / sesión',
    rating: '4.9',
    sessionsLabel: '58 equipos',
    tags: ['FPS', 'IGL', 'Táctica'],
    description:
      'Perfecto para equipos y jugadores serios que quieren mejorar comunicación, preparación y ejecución en partidas de alto nivel.',
  },
  {
    slug: 'luma-support-gap',
    initials: 'L',
    name: 'Luma Support Gap',
    headline: 'Especialista en support y bot lane para League of Legends',
    priceLabel: '19 € / sesión',
    rating: '4.7',
    sessionsLabel: '84 alumnos',
    tags: ['Support', 'Bot lane', 'LoL'],
    description:
      'Sesiones para mejorar roaming, visión, matchups y coordinación en línea con ejercicios y pautas claras.',
  },
  {
    slug: 'orion-aim-room',
    initials: 'O',
    name: 'Orion Aim Room',
    headline: 'Entrenador de aim y micro para Valorant y shooters tácticos',
    priceLabel: '27 € / sesión',
    rating: '4.9',
    sessionsLabel: '112 sesiones',
    tags: ['Aim', 'Valorant', 'FPS'],
    description:
      'Plan de mejora dividido por calentamiento, hábitos, colocación del crosshair y análisis de duelos perdidos.',
  },
];

export const categories = ['Gaming', 'Idiomas', 'Fitness', 'Diseño', 'Tecnología', 'Coaching', 'Música', 'Productividad'];

export const metrics = [
  { value: '24h', label: 'tiempo para activar el MVP visual' },
  { value: '12%', label: 'comisión de referencia por reserva' },
  { value: '6', label: 'expertos demo ya visibles' },
];

export const howItWorks = [
  {
    order: 1,
    icon: 'sparkles',
    title: 'Alta del experto',
    text: 'Crea cuenta, completa su perfil, conecta pagos y publica su servicio en pocos pasos.',
  },
  {
    order: 2,
    icon: 'calendar',
    title: 'Reserva del cliente',
    text: 'El cliente entra, compara perfiles, elige horario y paga en una experiencia sin fricción.',
  },
  {
    order: 3,
    icon: 'credit-card',
    title: 'Operación automática',
    text: 'La plataforma gestiona comisión, estado de reserva y payouts con visibilidad para ambos lados.',
  },
];

export const testimonials = [
  {
    name: 'Marcos',
    context: 'cliente ficticio · Valorant',
    quote: 'El perfil explicaba exactamente qué iba a recibir. Reservé en dos minutos y la experiencia fue muy clara.',
  },
  {
    name: 'Lucía',
    context: 'experta ficticia · League of Legends',
    quote: 'La parte interesante es que puedo enseñar mis servicios como profesional sin montar yo sola una web compleja.',
  },
  {
    name: 'Carlos',
    context: 'cliente ficticio · Fortnite',
    quote: 'Me gusta que el marketplace parece serio y transmite confianza. Eso hace mucho más fácil pagar online.',
  },
];

export const bookings = [
  {
    id: 'b1',
    client: 'Álvaro Ruiz',
    expert: 'Nyx Ranked Coach',
    status: 'Pagada',
    date: 'Lun · 19:00',
    amount: '24 €',
  },
  {
    id: 'b2',
    client: 'Nora Vidal',
    expert: 'Kai Duo Queue',
    status: 'Pendiente',
    date: 'Mar · 21:00',
    amount: '18 €',
  },
  {
    id: 'b3',
    client: 'Javier P.',
    expert: 'Orion Aim Room',
    status: 'Confirmada',
    date: 'Jue · 18:30',
    amount: '27 €',
  },
  {
    id: 'b4',
    client: 'Sara Torres',
    expert: 'Astra Tactics',
    status: 'Completada',
    date: 'Sáb · 12:00',
    amount: '21 €',
  },
];
