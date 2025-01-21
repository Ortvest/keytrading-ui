import { baseApi } from '@global/api/base.api';

import { ExampleEndpoint } from '@shared/enums/ApiEndpoints.enums';
import { HttpMethods } from '@shared/enums/HttpMethods.enums';

export const exampleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // type from here should be moved in shared/interfaces. I'm just don't wanna create another one example interface
    getPosts: builder.query<{ id: number; title: string }[], void>({
      query: () => ({
        url: 'your-url' + ExampleEndpoint.GET,
        method: HttpMethods.GET,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = exampleApi;
