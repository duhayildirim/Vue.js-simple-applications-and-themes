const app = new Vue({
    el: '#app',
    name: 'user table',
    data : {
        inUser:{},
        users: [
            {
                id:3,
                name: 'Selin',
                surname: 'Yılmaz',
                role: 'admin'
            },
            {
                id: 20,
                name: 'Leyla',
                surname: 'Yenenler',
                role: 'admin'
            },
            {
                id: 22,
                name: 'Mehmet',
                surname: 'Songül',
                role: "user"
            },
            {
                id: 29,
                name: 'Süleyman',
                surname: 'Yıldırım',
                role: 'user'
            },
            {
                id: 33,
                name: 'Akif',
                surname: 'Gültekin',
                role: 'user'
            },
            {
                id: 41,
                name: 'Selman',
                surname: 'Ulaş',
                role: 'user'
            },
            {
                id: 48,
                name: 'Ayşe',
                surname: 'Önal',
                role: 'admin'
            },
            {
                id: 53,
                name: 'Berk',
                surname: 'Bayındır',
                role: 'user'
            },
            {
                id: 55,
                name: 'Sinem',
                surname: 'Yılmaz',
                role: 'user'
            },
            {
                id: 81,
                name: 'Neşet',
                surname: 'Ertaş',
                role: 'user'
            },
            {
                id: 88,
                name: 'Kaan',
                surname: 'Taangöze',
                role: 'user'
            }
        ]
    },
    methods: {
        newUser(){
            this.inUser = { role : ''};
            $('#exampleModal').modal('show');
        },
        store(){
            if(this.inUser.name !== undefined && this.inUser.role !== '' && this.inUser.surname !== undefined)
            {
                if(this.inUser.id > 0)
                {
                    $("#endModal").css("visibility", "hidden");
                    let editUser = this.users.find(x => x.id === this.inUser.id);
                    editUser = this.inUser;
                }
                else{
                    this.users.push({
                        id: this.users.length +111 ,
                        name: this.inUser.name ,
                        surname: this.inUser.surname ,
                        role: this.inUser.role ,
                    });
                    $('#exampleModal').modal('hide');
                    this.inUser = {};
                }

            }
        },
        deleteUser(id){
            const deleteUser = this.users.find( x => x.id  === id);
            if(deleteUser !== null)
            {
                this.users = this.users.filter(x => x.id !== deleteUser.id);
            }
        },
        editUser(index){
            this.inUser = this.users[index];
            $('#exampleModal').modal('show');
            this.inUser = JSON.parse(JSON.stringify(this.users[index]));
        }
    }
});