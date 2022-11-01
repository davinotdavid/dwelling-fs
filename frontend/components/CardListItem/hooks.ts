import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteCard() {
  const queryClient = useQueryClient();

  return useMutation((cardId: string) => {
    return fetch(`https://dwelling-fs-production.up.railway.app/credit-cards/${cardId}`, { method: 'DELETE' })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cards'])
    }
  })
}
