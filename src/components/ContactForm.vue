<template>
  <!-- Création du formulaire de contact -->
  <div id="contactForm">
    <h1> Contact Form</h1>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input @click="isSuccess = true" type="submit" value="Send">
    <div v-if="isSuccess" class="successBox">
      <h1>SUCCESS !</h1>
    </div>
  </form>
</div>
</template>



<script>
// On utilise EmailJS pour recevoir les mails directement depuis le formulaire
import emailjs from '@emailjs/browser';

export default {
  data () {
   return {
     isSuccess: false
   }
 },
  methods: {
    scrollOnTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    // Il faut créer un compte sur https://dashboard.emailjs.com/sign-in, le tutoriel complet est sur https://www.emailjs.com/docs/tutorial/overview/.
    sendEmail() {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.$refs.form, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)

          },
        );
    },
  },
};
</script>

<style scoped>

* {box-sizing: border-box; }


#contactForm {
  scroll-behavior: smooth;
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #2c2c2c;
  padding: 20px;
  width: 75%;
  margin-bottom: 30px;
  color: white;
  font-family: Raleway;
}

#contactForm h1 {
  font-size: 25px;
}

label {
  float: left;
}

input[type=text],
[type=email],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  color: #2c2c2c;
}

input[type=submit] {
  background-color: #8849F2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #905aee;
}

.successBox {
  background-color: greenyellow;
  width: 15em;
  float: right;
  position: relative;
  border-radius: 5px;
  z-index: 9;
  text-align: center;
  font-size: 20px;
  color: black;
}

</style>