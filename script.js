$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });


  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    const partnersContainer = document.querySelector('.partners-container');

    const newPartnerCard = document.createElement('div');
    newPartnerCard.classList.add('partner-card');
    newPartnerCard.innerHTML = `
        <img src="partner4-logo.jpg" alt="Partner 4">
        <h3>Partner 4</h3>
        <p>Curabitur vel bibendum eros, a condimentum lorem.</p>
    `;
    
    partnersContainer.appendChild(newPartnerCard);
});


