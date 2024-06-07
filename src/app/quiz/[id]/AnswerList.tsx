import Answer from './Answer';
import TextAddForm from '@/components/TextAddForm';
import { createAnswer } from './actions';

interface AnswerListProps {
  quizId: number;
  questionId: number;
  answers: AnswerData[];
}

export default function AnswerList({
  quizId,
  questionId,
  answers,
}: AnswerListProps) {
  return (
    <>
      <ul className='ml-8'>
        {answers.map(a => (
          <li key={a.id}>
            <Answer quizId={quizId} id={a.id} answer={a.answer} />
          </li>
        ))}
        <li>
          <TextAddForm
            label='Add another answer:'
            action={createAnswer}
            args={{ quizId, questionId }}
          />
        </li>
      </ul>
    </>
  );
}
