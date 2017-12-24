Template7.registerHelper('json_stringify', function(context) {
  return JSON.stringify(context);
});
// Initialize your app
var myApp = new Framework7();
// Export selectors engine
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
//login
$$('.login-screen .list-button').on('click', function () {
   var username = $$('.login-screen input[name = "username"]').val();
   var password = $$('.login-screen input[name = "password"]').val();
   var wrongLogin = "Wrong username or password";
   var correctLogin = "Welcome to Vortex Retail Quote ";
   //login validations
   if (username == "vortex" && password == "123") {
     myApp.alert(correctLogin, function () {
       myApp.closeModal('.login-screen');
     })
   }else {
        myApp.alert(wrongLogin, function () {
        })
   }
});
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
// page specific js for customer.html
//'customer' is the name that i used in data-page="customer"
myApp.onPageInit('customer', function (page) {
  //for items
  $$.getJSON('data.php', function (data) {
    console.log(data);
       //looping through the data
       var html;
       for(var i = 0; i < data.length; i++)
       {
         //appending the data into html
        var Company = data[i].Company;

          html += "<p>" + Company + "</p>";

      }
     document.getElementById('custo').innerHTML = html;
  });
  });
// page specific js for customer.html
//'customer' is the name that i used in data-page="customer"
myApp.onPageInit('products', function (page) {
  //for items
  $$.getJSON('items.php', function (data) {
    console.log(data);
       //looping through the data
       var html;
       for(var i = 0; i < data.length; i++)
       {
         //appending the data into html
        var Description = data[i].Description;
        var Cost = data[i].Quantity;
        var Quantity = data[i].Cost;

          html += "<tr>";
          html += "<td>" + Description + "</td>";
          html += "<td>" + Cost + "</td>";
          html += "<td>" + Quantity + "</td>";
          html += "</tr>";

      }
     document.getElementById('data').innerHTML = html;
  });
  });

 // Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
