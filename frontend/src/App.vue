<template>
  <v-app id="inspire">
    <core-drawer v-if="isLogged"></core-drawer>

    <core-app-bar :isLogged="isLogged"></core-app-bar>

    <core-view :isLogged="isLogged"></core-view>   

    <core-footer></core-footer> 
  </v-app>
</template>

<script>
import EventBus from './util/eventBus';

export default {
  name: "App",
  components: {
    CoreFooter: () => import('./components/core/Footer'),
    CoreDrawer: () => import('./components/core/Drawer'),
    CoreAppBar: () => import('./components/core/AppBar'),
    CoreView: () => import('./components/core/View')
  },
  data: () => ({
    isLogged: EventBus.isLogged
  }),
  methods: {
    onLoggedIn() {
      this.isLogged = true;
      EventBus.authentication();
    }
  },
  created() {
    EventBus.$on('loggedIn', () => {
      this.onLoggedIn();
      this.$router.push('/home')
    })
  }
};
</script>
