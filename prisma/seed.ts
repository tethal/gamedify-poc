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
          { question: 'How much is 1 + 2?', answer: '3', },
          { question: 'How much is 1 + 3?', answer: '4', }
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
