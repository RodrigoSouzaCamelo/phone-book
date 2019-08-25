<template>
  <v-app id="inspire">
    <core-drawer></core-drawer>

    <core-app-bar></core-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <core-footer></core-footer>
    
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    CoreFooter: () => import('./components/core/Footer'),
    CoreDrawer: () => import('./components/core/Drawer'),
    CoreAppBar: () => import('./components/core/AppBar')
  },
  data: () => ({  })
};
</script>
