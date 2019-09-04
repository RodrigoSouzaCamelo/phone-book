<template>
  <v-content v-if="isLogged">
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>

  <router-view v-else></router-view>
</template>

<script>
export default {
  props: ["isLogged"]
};
</script>