document.addEventListener('DOMContentLoaded', function() {
    const countDisplay = document.getElementById('countDisplay');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const errorMessage = document.getElementById('errorMessage');

    let count = 0;

   
    function updateCount() {
      countDisplay.textContent = count;
      if (count === 0) {
        clearBtn.style.display = 'none';
      } else {
        clearBtn.style.display = 'block';
      }
    }

  
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCount();
    });

  
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCount();
        errorMessage.style.display = 'none'; 
      } else {
        errorMessage.style.display = 'block'; 
      }
    });

   
    clearBtn.addEventListener('click', function() {
      count = 0;
      updateCount();
      errorMessage.style.display = 'none'; 
    });

   
    updateCount();
  });