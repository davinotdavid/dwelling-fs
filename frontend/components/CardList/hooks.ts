import { useQuery } from '@tanstack/react-query';

type Card = {
  _id: string;
  lastFourDigits: string;
  balance: number;
}

export function useCardList() {
  return useQuery<Card[], Error>({
    queryKey: ['cards'],
    queryFn: () =>
      fetch('https://dwelling-fs-production.up.railway.app/credit-cards').then(res =>
        res.json()
      )
  })
}