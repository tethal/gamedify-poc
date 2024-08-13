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
      <h2 className='text-xl'>Questions:</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 p-6 gap-1'>
        {questions.map(q => (
          <Question
            key={q.id}
            quizId={quizId}
            expanded={expandedId == q.id}
            expand={() => setExpandedId(expandedId == q.id ? null : q.id)}
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
