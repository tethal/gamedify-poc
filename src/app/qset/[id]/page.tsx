import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function QSet({ params }: { params: { id: string } }) {
  const questionSet = await prisma.questionSet.findUnique({
    where: { id: Number.parseInt(params.id) },
    include: { questions: true }
  })
  if (!questionSet) {
    notFound()
  }
  return (
    <>
      <h1>{questionSet.name}</h1>
      <ul>
        {questionSet.questions.map(q => (
          <li key="{q.id}">Q: {q.question} ... A: {q.answer}</li>
        ))}
      </ul>
    </>
  );
}
