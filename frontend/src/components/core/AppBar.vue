<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="openOrCloseDrawer()" v-if="isLogged"></v-app-bar-nav-icon>
      <v-toolbar-title>PhoneBook</v-toolbar-title>
    </v-app-bar>
</template>

<script>
import EventBus from '../../util/eventBus.js';

export default {
    props: ['isLogged'],
    data: () => ({ 
        isDrawerOpened: null
    }),
    methods:{
        openOrCloseDrawer() {
            this.isDrawerOpened = !this.isDrawerOpened;
            EventBus.$emit('openOrCloseDrawer', this.isDrawerOpened);
        }
    }
}
</script>