<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// import OneSignalVue from 'onesignal-vue';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  beforeCreate() {
    this.$OneSignal.showSlidedownPrompt();
  },
}
</script>

<!-- <script setup>
// import { onBackgroundMessage } from "firebase/messaging/sw";
// import { onMessage } from "firebase/messaging";
import { getToken } from 'firebase/messaging'
import messaging from './firebase'
import HelloWorld from './components/HelloWorld.vue'
import OneSignalVue from '../node_modules/onesignal-vue';

const oneSignal = OneSignalVue()

oneSignal.showSlidedownPrompt()

const vapidKey = 'BLOjYR6_W7SCWT3iloqWTuZjHdesGtTTdr4zVWU0JjeyebtKGl1exIL7f3nIqy6pZDTLTD-o0bTEdAYYGA-Qm_0'

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');

      getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
        if (currentToken) {
          console.log("🚀 ~ file: App.vue ~ line 23 ~ getToken ~ currentToken", currentToken)
          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    }
  })
}



requestPermission()
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
