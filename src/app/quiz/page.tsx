import QuizList from './QuizList';
import TextAddForm from '@/components/TextAddForm';
import { createQuiz } from './actions';


export default function QuizzesPage() {
  return (
    <div className='max-w-7xl w-full flex flex-col gap-4 p-6 mx-auto mb-20 '>
      <QuizList />
      <TextAddForm label='create_new_quiz' action={createQuiz} args={{}} />
    </div>
  );
}
