document.addEventListener("DOMContentLoaded", function () {
    const FooterHTML = `<footer class="bg-dark text-white mt-5">
    <div class="container py-4">
        <div class="row">
            <div class="col-md-4">
                <img src="logo.jpeg" alt="Logo" style="height: 100px; font-size:20px">
                <p class="mt-2"font-size:20px>THE BEST SUPPLEMENTS TO HELP YOU GAIN STRENGTH!<br>Natural and safe!</p>
            </div>
            <div class="col-md-2">
                <h5 class="text-warning">Shop</h5>
                <ul class="list-unstyled">
                    <li>WHEY PROTEINS</li>
                   
                    <li>PRE WORKOUTS</li>
                    <li>CREATINE</li>
                    
                    <li>MULTIVITAMINS</li>
                    
                </ul>
            </div>
            <div class="col-md-2">
                <h5 class="text-warning">About</h5>
                <ul class="list-unstyled">
                    <li>HOME</li>
                    <li>SHOP</li>
                </ul>
            </div>
            <div class="col-md-2">
                <h5 class="text-warning">Account</h5>
                <ul class="list-unstyled">
                    <li>CART</li>
                    <li>MY ACCOUNT</li>
                    <li>MY ORDERS</li>
                    <li>WISHLIST</li>
                </ul>
            </div>
            <div class="col-md-2 text-center">
                <h5 class="text-warning">Newsletter</h5>
                <p>Get 20% discount for your first order</p>
                <input type="email" class="form-control" placeholder="Email Address...">
                <button class="btn btn-warning mt-2">Send</button>
            </div>
        </div>
    </div>
   
</footer>
`;
  
    document.getElementById("footer").innerHTML = FooterHTML;
  });
  