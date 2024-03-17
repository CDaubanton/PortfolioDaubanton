<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  function scrollOnTop() {
    window.scrollTo(0, 0);
}
</script>

<template>

  <header>
    <div class="wrapper">
      <nav id="navBar">
        <a id="logo" v-on:click="scrollOnTop"><img src="./assets/logo.png" alt="Logo de Minkavi Corp."></a>
        <a id="Home"><RouterLink to="/" >Acceuil</RouterLink></a>
        <a id="about"><RouterLink to="/about">A propos</RouterLink></a>
      </nav>
    </div>
  </header>

  <RouterView id="content"/>

  <footer>
        <ul id="social-icons">
            <li><a href="https://github.com/CDaubanton/" target="_blank">GitHub</a></li>
            <li><a href="https://www.twitter.com/mady2ouf" target="_blank">Twitter</a>
            </li>
            <li><a href="https://www.linkedin.com/in/clément-daubanton-852aa6295" target="_blank">LinkedIn</a></li>
        </ul>
        <p>Dernière mise à jour le 17 Mars 2024</p>
    </footer>

</template>

<style scoped>

header {
  z-index: 1;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: black;
}

#navBar {
  padding: 15px;
    display: flex;
    flex-direction: row;
    color:  rgb(255, 255, 255);
    align-items: center;
    text-decoration: none;
}

#navBar a{
  text-decoration: none;
  color: white;
}

#logo img {
  width: 75px;
  height: auto;
  cursor: pointer;
}

#navBar a {
  margin-left: 20px;
  font-size: 25px;
  
}

#content {
  padding-top: 102px;
}

footer {
  background-color: rgb(0, 134, 29);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-decoration: none;
    color:  rgb(255, 255, 255);
    font-family: Raleway;
}

#social-icons {
    width: 150px;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    
}

</style>
