import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { variables } from '../../utils/services/variables';

@Component ({
    selector: 'ErroresOnline',
    templateUrl: './erroresOnline.component.html'
})

export class ErroresOnlineComponent implements OnInit {
    public selectedMarket = '0';
    public Market = '';
    private sub: Subscription;
    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
    ) {  }

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            variables.modulo = 'create';
            this.Market = params.selectedMarket;
            window.dispatchEvent(new Event('resize'));
        });
    }

    // Almacena el mercado (evento change del Select)
    getMarket() {
        this.Market = this.selectedMarket;
    }

    // Redirige a ventana Add de la entidad seleccionada

    continue() {
        console.log(' ha seleccionado ', this.Market);
        /*if (this.Market === 'BEUE') {
            this.router.navigate(['online/BATS/BEUE']);
        } else if (this.Market === 'CEUX') {
            this.router.navigate(['online/BATS/CEUX']);
        } else*/ if (this.Market === 'BATE') {
            this.router.navigate(['online/BATS/BATE']);
        } else if (this.Market === 'CHIX') {
            this.router.navigate(['online/BATS/CHIX']);
        } else if (this.Market === 'TQ') {
            this.router.navigate(['online/LSE/TQ']);
        } else if (this.Market === 'BIT') {
            this.router.navigate(['online/LSE/BIT']);
        } else if (this.Market === 'LSE') {
            this.router.navigate(['online/LSE/LSE']);
        } else if (this.Market === 'TQE') {
            this.router.navigate(['online/LSE/TQE']);
        } else {
            this.router.navigate(['online/BMEX']);
        }
    }

    // Redirige a ventana anterior
    goBack():  void {
        this.location.back();
    }

    cancelFunction() {
        this.router.navigate(['/operators']);
    }
}
