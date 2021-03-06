import {Link, routes} from '@redwoodjs/router'

const PostsList = ({posts}) => {
  return (
    <div className="rw-segment grid fade-in">
      {posts.map(post => (
        <Link
          key={post.id}
          to={routes.post({id: post.id})}
          title={'Show post ' + post.id + ' detail'}
          className="rw-link undecorated"
        >
          <img src={post.image} alt={post.label} />
        </Link>
      ))}
    </div>
  )
}

export default PostsList
