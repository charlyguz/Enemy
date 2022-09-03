const contenedorTarjetas = document.querySelector(".contenedor-tarjetas");
var yeraNumImg = 0;
var yeraNumDesc = 0;
var pYera = 0;
var btnYera = 0;
var yeraDesc = 0;
class playera {
    constructor(foto, descripcion, talla, precio, color, cantidad, id) {
        this.foto = foto;
        this.descripcion = descripcion;
        this.talla = talla;
        this.precio = precio;
        this.color = color;
        this.cantidad = cantidad;
        this.id = id;

    }
}

for (let i = 0; i < 11; i++) {
    nuevayera = `
    <div class="tarjeta">
        <div class="img-yera">
            <img src="./assets/EDICION ZILVERK.jpg" alt="yera" id=${yeraNumImg}>
            </div>
            <div class="description" id="drc${yeraDesc}">
                <h2 id=${yeraNumDesc}>Yera</h2>
                <p class="p-yera" id=${pYera}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                <button class="btn-yera" id=${btnYera}>Buy</button>
        </div>
    </div>
    `
    yeraNumImg++;
    yeraNumDesc++;
    pYera++;
    btnYera++;
    contenedorTarjetas.innerHTML += nuevayera
    yeraDesc++;

}
