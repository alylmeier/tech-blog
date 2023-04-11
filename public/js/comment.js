const displayComments = (comments) => {
  const commentSpace = document.querySelector('#comment-space');
  commentSpace.innerHTML = '';

  comments.forEach((comment) => {
    const commentDiv = document.createElement('div');
    commentDiv.innerHTML = `<h4>${comment.name}</h4>`;
    commentSpace.appendChild(commentDiv);
  });
};

const fetchComments = async () => {
  const path = window.location.pathname.split('/');
  const id = path[path.length - 1];
  const response = await fetch(`/api/comments/${id}`);

  if (response.ok) {
    const comments = await response.json();
    displayComments(comments);
  } else {
    console.error('Failed to fetch comments');
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#comment-name').value.trim();
  const path = window.location.pathname.split('/');
  const id = path[path.length - 1];

  if (name) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      fetchComments();
    } else {
      alert('Failed to create comment');
    }
  }
};

fetchComments();

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);