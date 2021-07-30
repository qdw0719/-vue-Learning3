import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 0,
            cart: [
                {product_id: 1, product_name: '핸드폰 거치대', category: 'A'},
                {product_id: 2, product_name: '블루투스 이어폰', category: 'B'}
            ]
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    },
    getters: {
        cartCount: state => {
            return state.cart.length;
        },
        productACount: state => {
            return state.cart.filter(p => p.category == 'A').length;
        }
    }
});

export default store;