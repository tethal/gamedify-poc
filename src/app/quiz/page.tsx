import QuizList from './QuizList';
import TextAddForm from '@/components/TextAddForm';
import { createQuiz } from './actions';

export default function QuizzesPage() {
  return (
    <>
      <QuizList />
      <TextAddForm label='Create a new quiz' action={createQuiz} args={{}} />
    </>
  );
}
