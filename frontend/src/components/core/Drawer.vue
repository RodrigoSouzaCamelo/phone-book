<template>
<v-navigation-drawer v-model="isDrawerOpened" app>
      <v-list dense>

        <v-list-item @click="goToHome()">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="goToContacts()">
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import EventBus from '../../util/eventBus.js';

export default {
    data: () => ({
      isDrawerOpened: false
    }),
    methods: { 
      goToHome() {
        this.$router.push('/');
      },
      goToContacts() {
        this.$router.push('/contacts');
      }
    },
    created() {
        EventBus.$on('openOrCloseDrawer', (isDrawerOpened) => {
            this.isDrawerOpened = isDrawerOpened;
        })
    }
}
</script>