document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
          <img src="logo.jpeg" alt="Logo" class="custom-logo">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link text-white" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="shop.html">Shop</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="whey protein.html">Whey Protein</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="creatine .html">Creatine</a></li>
                         <li class="nav-item"><a class="nav-link text-white" href="Shop.html">Shop</a></li>

            <li class="nav-item"><a class="nav-link text-white" href="multivitamins.html">Multi Vitamins</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbarHTML;
});
