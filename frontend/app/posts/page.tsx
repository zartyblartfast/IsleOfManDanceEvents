import {redirect} from 'next/navigation'

/** Legacy URL: event listing now lives at /events */
export default function PostsIndexRedirect() {
  redirect('/events')
}
