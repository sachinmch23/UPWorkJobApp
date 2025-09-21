const likeButtons = document.querySelectorAll('.likeButton');
    const likeCounts = document.querySelectorAll('.likeCount');

    likeButtons.forEach((button, index) => {
      let count = 0;

      button.addEventListener('click', () => {
        count++;
        likeCounts[index].textContent = count;
      });
    });

     document.getElementById("fileName").addEventListener("click", function() {
      document.getElementById("fileInput").click();
    });

    
    document.getElementById("fileInput").addEventListener("change", function(event) {
      const file = event.target.files[0];
      if (file) {
        document.getElementById("fileName").innerText = "Selected: " + file.name;
      }
    });


    const popup=document.getElementById("popup");
    function showPopup(){ popup.style.display="flex"; }
    function hidePopup(){ popup.style.display="none"; }
    
    function schedule(){ setTimeout(showPopup,20000); } // 30 sec

    function submitEmail(){
      let email=document.getElementById("email").value;
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        hidePopup(); schedule();
      } else {
        document.getElementById("err").innerText="Valid email dalo!";
      }
    }
    function cancelPopup(){ hidePopup(); schedule(); }

    // Page load pe dikhaye
    showPopup();
