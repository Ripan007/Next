import Link from 'next/link'
import { Fragment } from 'react'

function NewsPage() {
  return (
    <Fragment>
      <h1>news page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-awesome'>nextjs is awesome</Link>
        </li>
        <li>something else</li>
      </ul>
    </Fragment>
  )
}
export default NewsPage
