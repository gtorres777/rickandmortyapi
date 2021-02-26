<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<style>
#app {
  background-color: #24282F;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
