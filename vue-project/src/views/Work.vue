<template>
  <div class="displayBox">
    <RouterLink to="/"> Back </RouterLink>
    <h1>Want to Gamble for More Money?</h1>
  </div>
  <h4>(Click chatbox to interact with Bob)</h4>
  <div @click="say" class="chatbox">
    <h2>Bob: {{ chat }}</h2>
  </div>
  <div class="option">
    <h3 @click="yes">Yes</h3>
    <h3 @click="no">No</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const chat = ref('...')

function no() {
  if(chat.value === 'You came here to gamble?') {
    chat.value = "Oh..."
}
}
function yes() {
  if(chat.value === 'You came here to gamble?') {
    chat.value = "....."
  }
}

function say() {
  if(chat.value === '...') {
    chat.value = 'Hi'
  } else if(chat.value === 'Hi') {
    chat.value = 'what do you want?'
  } else if(chat.value === 'what do you want?') {
    chat.value = 'You came here to gamble?'
  } else if(chat.value ==="Oh...") {
    chat.value = "Well that's a relief"
  } else if(chat.value ==="Well that's a relief") {
    chat.value = "Feel free to hang around for a bit" 
  } else if(chat.value === ".....") {
    chat.value = "No, I won't let you."
  } else if(chat.value === "No, I won't let you.") {
    chat.value = "Gambling is bad for you."
  } else if(chat.value === "Gambling is bad for you.") {
    chat.value = "Leave. That is final."
  }
}
</script>

<style scoped>
  .chatbox{
    height: 250px;
    width: 400px;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-self: center;
    position: relative;
    top: 260px;
    border: 5px solid white
  }
  h1{
    font-size: 30px;
    text-align: center;
    margin-top: 50px;
  }
  h2{
    font-size: 20px;
    color: white;
    text-align: center;
  }
  h4{
    justify-self: center;
    position: relative;
    top: 260px;
  }
  .option{
    display: flex;
    justify-content: center;
    justify-self: center;
    position: relative;
    top: 280px;
    flex-direction: row;
    background-color: rgb(0, 0, 0);
    gap: 50px;
    width: 150px;
    height: 50px;
    border-radius: 15px;
  }
  h3,h3{
    color: white;
  }
</style>