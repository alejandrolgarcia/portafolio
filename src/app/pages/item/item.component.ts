import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService  ) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
      // console.log( parametros['id'] );
          // tslint:disable-next-line: no-string-literal
          this.productoService.getProducto(parametros['id'])
            .subscribe( (producto: ProductoDescripcion) => {
                // tslint:disable-next-line: no-string-literal
                this.id = parametros['id'];
                // console.log(producto );
                this.producto = producto;
              });
    });

  }

}
