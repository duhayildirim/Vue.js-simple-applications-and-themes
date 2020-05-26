Vue.component('saveFormTemplate', {
   template: '#formTemplate',
    data() {
       return {
           item: {}
       }
    },
    methods: {
       saveItem() {
           //reactivity
            Vue.set(this.item, 'id' , ++this.$parent.$data.lastId);
            Vue.set(this.item, 'arsiv' , false);
            this.$parent.$data.allItems.push(this.item);
            this.item = {};
       }
    }
});

Vue.component('storeList', {
    template: '#storeListTemplate',
    props: {
        title: { type: String , required: true , default: 'Listele'},
        items: { type: Array , required: true , default: [] },
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.items.forEach((item) =>{
                total += parseFloat(item.fiyat.toString());
            });
            return total.toFixed(2) ;
        },
        totalItem() {
            let total = 0;
            this.items.forEach((item) =>{
                total += parseInt(item.adet.toString());
            });
            return total;
        }
    },
    methods: {
        changeItemStatus(item) {
            item.arsiv = !item.arsiv;
        },
        deletedItem(id) {
            // this.$parent.$data.allItems = this.$parent.$data.allItems.filter(x => x.id !== id);
            // eğer erişmekte zorlanıyorsan bunu kullan
              this.$emit('item-delete' , id);
        }
    }
});
const App = new Vue({
    el: '#app',
    data: {
        lastId: 0,
        allItems: [
            {"id": 1, "baslik": "Masa", "kategori": "Mobilya", "adet": "1", "fiyat": 259, "arsiv": false},
            {"id": 2, "baslik": "Kitaplık", "kategori": "Mobilya", "adet": "2", "fiyat": 159, "arsiv": false},
            {"id": 3, "baslik": "Monitor", "kategori": "Elektronik", "adet": "5", "fiyat": 400, "arsiv": true}
        ],
        search: '',
        filteredItems : []
    },
    created() {
        this.lastId = this.allItems.length;
        this.filteredItems = this.allItems;
    },
    computed: {
        activeItems() {
            return this.filteredItems.filter(x => x.arsiv === false);
        },
        archivedItems() {
            return this.filteredItems.filter(x => x.arsiv === true);
        }
    },
    methods: {
        itemDeleted(id) {
            this.filteredItems = this.filteredItems.filter(x => x.id !== id);
        },
        searchItems() {
            this.filteredItems = [];
            if (this.search.length>0) {
                this.allItems.forEach(i => {
                    if(i.baslik != null && i.baslik.includes(this.search))
                    {
                        this.filteredItems.push(i);
                    }
                });
            }
            else {
                this.filteredItems = this.allItems;
            }

        }
    }
});