<script setup>
  import { RouterLink, RouterView } from 'vue-router';

  function scrollOnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
<!-- Le Header restera sur toutes les pages -->
  <header>
    <div class="wrapper">
      <nav id="navBar">
        <a id="logo" @click="scrollOnTop"><img src="./assets/logo.png" alt="Logo de Minkavi Corp."></a>
        <a href="#description" class="navBtn" id="Home">Home</a>
        <a href="#carrousel" class="navBtn" id="creations">Creations</a>
        <a href="#contactForm" class="navBtn" id="contact">Contact</a>
      </nav>
    </div>
  </header>
<!-- On utilise la vue du Router, quand on va sur une page autre que celle prévue par défaut, la page 404 apparait -->
  <RouterView />

  <!-- Le footer reste le même sur toutes les pages -->
  <footer>
    <ul id="social-icons">
            <li><a href="https://github.com/CDaubanton/" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.twitter.com/mady2ouf" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            </li>
            <li><a href="https://www.linkedin.com/in/clément-daubanton-852aa6295" target="_blank"><i
                        class="fa-brands fa-linkedin"></i></a></li>
        </ul>
        <p>Last update : March 19th 2024</p>
    </footer>

</template>

<style scoped>

header {
  font-family: Raleway;
  z-index: 4;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: black;
}

#Home {
  cursor: pointer;
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
  margin-top: 102px;
}

footer {
    background-color: #8B41F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-decoration: none;
    color:  rgb(255, 255, 255);
    font-family: Raleway;
}

footer p {
  font-size: 25px;
  font-weight: bold;
}

#social-icons {
    width: 150px;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    
    
}

#social-icons i{
    text-decoration: none;
    color: white;
}

#social-icons a {
    font-size: 2em;
}

#social-icons a:hover {
    opacity: 0.8;
}

@media (max-width: 1000px) {


#navBar .navBtn {
  display: none;
}
#logo img {
  width: 75px;
  height: auto;
  cursor: pointer;
}


  footer p {
  font-size: 1em;
  font-weight: bold;
}
}
</style>
