      function showSocialMedia() {
        let name = prompt("What is your name?");
        social.style.display = "inline";
        showName.innerHTML = name;
      }
      let social = document.querySelector(".social");
      let showName = document.querySelector(".showName");
      let moreButton = document.querySelector(".more");
      moreButton.addEventListener("click", showSocialMedia);