import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateCard() {
  const queryClient = useQueryClient();

  return useMutation((cardNumber: string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardNumber })
    };
    return fetch('https://dwelling-fs-production.up.railway.app/credit-cards', requestOptions)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cards'])
    }
  })
}
