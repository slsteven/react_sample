var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      asdf
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
