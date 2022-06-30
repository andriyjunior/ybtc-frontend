import { endpoints, request } from '@/utils';
import { GetPageResponse } from './page.types';

export const getPage = (name: string) => {
  return request.get<GetPageResponse>(endpoints.page(name));
};
