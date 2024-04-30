'use server';

import prisma from '@/lib/db';

/**
 * Update the name of a question set.
 * @param id the id of the question set
 * @param name the new name of the question set
 * @throws Error if the name is empty, the user is not authorized to
 *               update the question set, or there is a database error
 *               (e.g. the question set does not exist)
 */
const updateQSetName = async (id: number, name: string) => {
  // TODO: remove artificial delay to simulate network latency
  await new Promise(resolve => setTimeout(resolve, 3000));
  if (name === '') {
    throw new Error('Name cannot be empty');
  }
  // TODO: ensure user is authorized to update this question set
  await prisma.questionSet.update({
    where: { id },
    data: { name },
  });
};

export { updateQSetName };
