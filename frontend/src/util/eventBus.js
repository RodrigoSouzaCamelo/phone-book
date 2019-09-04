import Vue from 'vue';

const EventBus = new Vue({
    data: () => ({
        isLogged: false
    }),
    methods: {
        authentication() {
            this.isLogged = true;
        }
    }
});

export default EventBus;