import { FormEvent, useState, useTransition } from 'react';

/**
 * A hook for managing transition and error states of a form with a server action.
 * @param action the server action, must return void on success or throw an Error
 * @returns an object with the `Error` message (or empty string if no error),
 * a boolean indicating if the action is pending, and a function to pass to
 * the form's `onSubmit` attribute
 */
export default function useFormAction(action: () => Promise<void>) {
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  // const [isPending, startTransition] = useTransition();

  async function formAction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setIsPending(true);
    try {
      await action();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'internal error');
    } finally {
      setIsPending(false);
    }
  }

  return { error, isPending, formAction };
}
