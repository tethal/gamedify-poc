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
    <>
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
    </>
  );
}
