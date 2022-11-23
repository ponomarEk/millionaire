const GAME_BUTTON_TYPES = Object.freeze({
  LARGE: 'large',
  SMALL: 'small',
});

const GAME_BUTTON_STYLE_TYPES = Object.freeze({
  PENDING: 'pending',
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
  DISABLED: 'disabled',
  CURRENT: 'current',
});

const ROUTE_PATHS = Object.freeze({
  START: '/',
  GAME: '/game',
  END: '/end',
});

export { GAME_BUTTON_STYLE_TYPES, GAME_BUTTON_TYPES, ROUTE_PATHS };
