new Vue({
    el : "#app",
    template: `
        <section>
            <div>
                <h3>Tarefas</h3>
                <nav>
                    <ul>
                        <li v-if="lista == 0">Sem registros</li>
                        <li v-else v-for="(item, index) in lista" v-bind:key="index">
                            <h3>{{item.assunto}}</h3>
                            <span>{{item.informacao}}</span>
                            <a href='#' v-on:click.prevent='removeLista(index)'>eliminar</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <form action="#">
                <div>
                    <label for="">assunto</label>
                    <input type="text" v-model="assunto" placeholder="assunto">
                </div>
                <div>
                    <label for="">Informação</label>
                    <textarea v-model="informacao" placeholder="aqui esta a minha mensagem"></textarea>
                </div>
                <div>
                    <button v-on:click.prevent="addLista()" type="submit">Enviar</button>
                </div>
            </form>
        </section>`,
     
    data() {
       return {
           lista : []
            ,
            assunto : "",
            informacao: ""
       }
            
       
    },
    methods:{
        addLista(){
            this.lista.push({
                assunto: this.assunto,
                informacao: this.informacao
            });
            this.assunto = "";
            this.informacao = "";
        },
        removeLista(i){
            this.lista.splice(i, 1);
        }
    }
})