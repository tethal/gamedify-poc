import Answer from './Answer';
import TextAddForm from '@/components/TextAddForm';
import { createAnswer } from './actions';
import useTranslation from '@/hooks/useTranslation';

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
  const { translate } = useTranslation();
  return (
    <>
      <ul className='ml-20'>
        {answers.map(a => (
          <li key={a.id}>
            <Answer quizId={quizId} id={a.id} answer={a.answer} />
          </li>
        ))}
        <li>
          <TextAddForm
            label={translate('add_answer')}
            action={createAnswer}
            args={{ quizId, questionId }}
          />
        </li>
      </ul>
    </>
  );
}
