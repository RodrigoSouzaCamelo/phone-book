<template>
  <v-app id="inspire">
    <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="authentication()">Login</v-btn>
              </v-card-actions>
            </v-card>
             </v-flex>
        </v-layout>
  </v-app>
</template>

<style scoped>
body {
  overflow: hidden;
}
</style>

<script>
import EventBus from '../util/eventBus';

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods: {
      authentication() {
        EventBus.$emit('loggedIn');
      }
    }
  }
</script>