<template>
    <div>
        <h1>Cart: {{cartCount}}</h1>
        <h1>catergory A count: {{productACount}}</h1>
        <h2>Count : {{count}}</h2>
        <button type="button" @click="add">add</button>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        cartCount() {
            return this.$store.getters.cartCount;
        },
        productACount() {
            return this.$store.getters.productACount;
        }
    },
    methods: {
        add() {
            this.$store.commit("increment");
        }
    }
}
</script>