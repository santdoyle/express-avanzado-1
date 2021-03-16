
export default class Productos{
    constructor(arr){
        this.arr = arr
    }

    listarProductos(){
        return this.arr
    }

    listarPorId(id){
        const listado = Object.entries(this.arr)

        if(id > listado.length){
            throw new Error('Producto no encontrado')
        }
        
        return listado[id]
    }

    guardar(listado){

        const producto = {
            title: this.arr.title,
            price: this.arr.price,
            thumbnail: this.arr.thumbnail,
            id: listado.length
        }

        return producto;
    }

    actualizar(id, nuevaInfo){
        const arr = Object.entries(this.arr)
        
        arr[id] = {
            title: nuevaInfo.title + id,
            price: nuevaInfo.price,
            thumbnail: nuevaInfo.thumbnail,
            id: arr.length
        }

        return arr[id]
    }

    borrar(id){
        const listado = Object.entries(this.arr)
        const nuevoListado = listado.splice(0, id)

        return nuevoListado
    }
}