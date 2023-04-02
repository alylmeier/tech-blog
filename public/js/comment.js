const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#comment-name').value.trim();
    const path= window.location.pathname.split("/");
    const id = path[path.length-1]
  
    if (name) {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log(name)
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);