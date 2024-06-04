import { FormEvent, useState } from 'react';

/**
 * A hook for managing transition and error states of a form with a server action.
 * @param action the server action, on error it must return an object with an `error` property
 * @returns an object with the `error` message (or empty string if no error),
 * a boolean indicating if the action is pending, and a function to pass to
 * the form's `onSubmit` attribute
 */
export default function useFormAction(
  action: () => Promise<{ error?: string } | undefined>,
) {
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  async function formAction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setIsPending(true);
    try {
      const result = await action();
      if (result?.error) {
        setError(result.error);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'internal error');
    } finally {
      setIsPending(false);
    }
  }

  return { error, isPending, formAction };
}
