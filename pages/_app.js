import 'tailwindcss/tailwind.css'
import PostsProvider from '../context/PostContext';

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  )
}

export default MyApp
