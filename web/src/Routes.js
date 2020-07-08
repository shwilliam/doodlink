import {Private, Route, Router} from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/posts/new" page={NewPostPage} name="newPost" />
      <Route path="/posts/{id:Int}" page={PostPage} name="post" />
      <Route path="/posts" page={PostsPage} name="posts" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="home">
        <Route
          path="/posts/{id:Int}/edit"
          page={EditPostPage}
          name="editPost"
        />
        <Route path="/posts/edit" page={EditPostsPage} name="editPosts" />
        <Route path="/logout" page={LogoutPage} name="logout" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
