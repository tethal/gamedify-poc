'use client';

import Question from './Question';
import { useState } from 'react';
import TextAddForm from '@/components/TextAddForm';
import { createQuestion } from './actions';

interface QuestionListProps {
  quizId: number;
  questions: QuestionData[];
}

export default function QuestionList({ quizId, questions }: QuestionListProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  return (
    <>
      <h2>Questions:</h2>
      <div className='flex flex-col'>
        {questions.map(q => (
          <Question
            key={q.id}
            quizId={quizId}
            expanded={expandedId == q.id}
            expand={() => setExpandedId(q.id)}
            {...q}
          />
        ))}
      </div>
      <TextAddForm
        label='Add new question:'
        action={createQuestion}
        args={{ quizId }}
      />
    </>
  );
}
