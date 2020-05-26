const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        dataItem: { title: '' , status: false },
        dataList: [
            {id: 1 , title: 'navbarı düzenle' , status: true , list:'frontend'},
            {id: 2 , title: 'kayıt fonksiyonlarını yaz' , status: true , list:'backend'},
            {id: 3 , title: 'silme fonksiyonlarını yaz' , status: false , list:'backend'},
            {id: 4 , title: 'başlıkları düzenle' , status: false , list:'frontend'},
            {id: 5 , title: 'arama fonksiyonunu yaz' , status: false , list:'backend'},
            {id: 6 , title: 'menüleri düzenler' , status: false , list:'frontend'},
        ],
        listItems: [
            {id: 1, title:'backend'},
            {id: 2, title:'frontend'}
        ],
        activeListItem: {},
        filteredDataList: [],
        newList: {}
    },
    created() {
        const defaultListItem = this.listItems[0];
        if (defaultListItem != null) {
            this.changeListItem(defaultListItem.id);
        }
    },
    methods: {
        toggleDataListStatus(index) {
            this.start[index].status = !this.start[index].status ;
        },
        toggleDataListFinishedStatus(index) {
            this.finish[index].status = !this.finish[index].status ;
        },
        save() {
            if (this.dataItem.title !== '') {
                this.dataItem.id = this.dataList.length +1 ;
                this.dataItem.list = this.activeListItem.title ;
                this.dataList.push(this.dataItem);
                this.clearForm();
                this.changeListItem(this.activeListItem.id);
            }
        },
        clearForm() {
            this.dataItem = { title: '' , status: false };
        },
        deleteItem(id) {
            this.dataList = this.dataList.filter(x => x.id !== id);
        },
        changeListItem(id) {
            const listItem = this.listItems.find(x => x.id === id);
            if (listItem != null) {
                this.activeListItem = listItem;
                this.filteredDataList = this.dataList.filter(x => x.list === listItem.title);
            }
        },
        listSave() {
            if (this.newList.title != null) {
                this.newList.id = this.listItems.length+1;
                this.listItems.push(this.newList);
                this.newList = {};
            }
        },
        listItemCount(title) {
            return this.dataList.filter(x => x.list === title).length;
        }
    },
    computed: {
        start() {
            return this.filteredDataList.filter(x => x.status === false);
        },
        finish() {
            return this.filteredDataList.filter(x => x.status === true);
        }
    }
});