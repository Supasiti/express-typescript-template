import pino from 'pino';

export const log = pino({
  transport: {
    target: 'pino-pretty', // require pino-pretty library
    options: {
      colorize: true
    }
  }
})

