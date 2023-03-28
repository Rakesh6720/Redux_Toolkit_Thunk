import PostsLists from "./features/post/PostsLists";
import AddPostForm from "./features/post/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
