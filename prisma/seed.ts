import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const set1 = await prisma.questionSet.upsert({
    where: { name: 'Math' },
    update: {},
    create: {
      name: 'Math',
      questions: {
        create: [
          { question: 'How much is 1 + 1?', answer: '2', },
          { question: 'How much is 2 + 1?', answer: '3', },
          { question: 'How much is 2 + 2?', answer: '4', },
          { question: 'How much is 3 + 1?', answer: '4', },
          { question: 'How much is 3 + 2?', answer: '5', },
          { question: 'How much is 3 + 3?', answer: '6', },
          { question: 'How much is 4 + 1?', answer: '5', },
          { question: 'How much is 4 + 2?', answer: '6', },
          { question: 'How much is 4 + 3?', answer: '7', },
          { question: 'How much is 4 + 4?', answer: '8', },
        ],
      },
    },
  })
  console.log({ set1 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
