<template>
 <div :style="{'background-image': 'url(' + require('/home/ivelin/cosmos-explorer/Cosmos-Project-Explorer/public/img/icons/download (1).jpeg') + ')'}"></div>
<div class="col-3"><h3>Cosmos Explorer</h3></div>
  <div id="nav" class="col-12git reflog">

    <nav class="navbar navbar-dark bg-primary">

      <div class="container">
    <router-link to="/">Home</router-link> |

<div class="nav-item dropdown " style="white-space: nowrap;" >
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blocks</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/blocks/number">Search for Block by Number</router-link></li>
            <li><router-link to="/blocks/number/x">Get X Blocks</router-link></li>
            <li><router-link to="/blocks/hash">Search for Block by Hash</router-link></li>
          </ul>
        </div>
            |
        <div class="nav-item dropdown" style="white-space: nowrap;">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Transactions</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/blocks/number">Get X Unconfirmed transactions</router-link></li>
            <li><router-link to="/blocks/number/x">Get Transaction by Hash</router-link></li>
          </ul>
        </div>
              |

        <div class="nav-item dropdown" style="white-space: nowrap;">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accounts</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/address">Get data for address</router-link></li>
            <li><router-link to="/blocks/number/x">Search Transactions of Address</router-link></li>
          </ul>
        </div>
     </div>
     </nav>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
#nav {
  
  padding: 5px;
  padding-top: 0;
}
#nav a {
  font-weight: bold;
  color: #000000;
}
#nav a.router-link-exact-active {
  color: #dd1f1f;
}
</style>