import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.quiz.upsert({
    where: { code: '1234' },
    update: {},
    create: {
      name: 'Math',
      code: '1234',
      questions: {
        create: [
          {
            question: 'How much is 1 + 1?',
            answers: {
              create: [{ answer: '2' }],
            },
          },
          {
            question: 'How much is 2 + 2?',
            answers: {
              create: [{ answer: '4' }],
            },
          },
          {
            question: 'How much is 3 + 3?',
            answers: {
              create: [{ answer: '6' }],
            },
          },
          {
            question: 'How much is 4 + 4?',
            answers: {
              create: [{ answer: '8' }],
            },
          },
          {
            question: 'How much is sqrt(9)?',
            answers: {
              create: [{ answer: '3' }, { answer: '-3' }],
            },
          },
          {
            question: 'How much is sqrt(16)?',
            answers: {
              create: [{ answer: '4' }, { answer: '-4' }],
            },
          },
          {
            question: 'How much is sqrt(-25)?',
            answers: {
              create: [{ answer: '5i' }, { answer: '-5i' }],
            },
          },
          {
            question: 'How much is 1 + 2 * 3?',
            answers: {
              create: [{ answer: '7' }],
            },
          },
          {
            question: 'How much is 1 * 2 + 3?',
            answers: {
              create: [{ answer: '5' }],
            },
          },
          {
            question: 'Is 9 prime?',
            answers: {
              create: [{ answer: 'no' }],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
