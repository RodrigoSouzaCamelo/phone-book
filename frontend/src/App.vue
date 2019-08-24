<template>
  <v-app id="inspire">
    <navigation-drawer></navigation-drawer>

    <app-bar></app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <app-footer></app-footer>
    
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import AppBar from './components/AppBar';

export default {
  name: "App",
  components: {
    'app-footer': Footer,
    'navigation-drawer': NavigationBar,
    'app-bar': AppBar
  },
  data: () => ({
  })
};
</script>
