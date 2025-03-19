import swaggerJSDoc from 'swagger-jsdoc';

const swaggerConfig = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Tarefei - API para gestão de tarefas e atividades',
        version: '1.0.0',
        description: 'Documentação da API do Tarefei',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local server',
        },
      ],
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJSDoc(swaggerConfig);

export { swaggerDocs };

