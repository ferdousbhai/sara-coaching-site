import { useContext, createContext, useMemo } from 'react';
import useSWR from 'swr';

const PostsContext = createContext()

// Expose a hook that child components can call to fetch/update data from context
export function usePosts() {
    return useContext(PostsContext)
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const PostsProvider = ({ children }) => {

    const { data, error, mutate: mutatePosts } = useSWR(
        `${process.env.BLOG_URL}/ghost/api/v3/content/posts?key=${process.env.CONTENT_API_KEY}&fields=title,slug`,
        fetcher,
        {
            revalidateOnFocus: true
        }
    );

    const value = useMemo(() => ({ data, error, mutatePosts }), [
        data,
        error,
        mutatePosts,
    ]);

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider >
    );
}

export default PostsProvider;