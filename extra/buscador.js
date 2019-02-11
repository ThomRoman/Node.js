class Search{
    constructor(obj){
        this.element = document.getElementById(obj.id)
        this.list = obj.list
        this.init()
    }
    init(){
        let input , listContainer
        this.element.innerHTML =`
            <input placeholder="Buscar aquí" type="text" class="input">
            <listgroup class="is-visible" id="searchList"></listgroup>
        `
        input=document.querySelector('.input')
        listContainer = document.getElementById('searchList')
        this.watch(input,this.list,listContainer)
    }
    watch(input,list,search){
        input.addEventListener('keyup',()=>{
            search.innerHTML = ``
        })
    }
}