const likeButtons = document.querySelectorAll('.likeButton');
    const likeCounts = document.querySelectorAll('.likeCount');

    likeButtons.forEach((button, index) => {
      let count = 0;

      button.addEventListener('click', () => {
        count++;
        likeCounts[index].textContent = count;
      });
    });