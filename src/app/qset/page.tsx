import Link from "next/link";
import prisma from "../../lib/db"

export default async function QSet() {
  const questionSets = await prisma.questionSet.findMany()
  return (
    <ul>
      {questionSets.map(qs => (
        <li key={qs.id}>
          <Link className="underline" href={`/qset/${qs.id}`}>{qs.name}</Link>
        </li>
      ))}
    </ul>
  );
}
