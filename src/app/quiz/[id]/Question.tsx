import QuestionText from './QuestionText';
import AnswerList from './AnswerList';

interface QuestionProps extends QuestionData {
  quizId: number;
  expanded: boolean;
  expand: () => void;
}

export default function Question({
  quizId,
  id,
  question,
  answers,
  expanded,
  expand,
}: QuestionProps) {
  return (
    <div className='border border-zinc-600 p-4'>
      <QuestionText
        quizId={quizId}
        id={id}
        question={question}
        expanded={expanded}
        expand={expand}
      />
      {expanded && (
        <AnswerList quizId={quizId} questionId={id} answers={answers} />
      )}
    </div>
  );
}
