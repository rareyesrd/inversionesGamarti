var app = new Vue({
    el: '#calculator',
    data: {
      error: [],
      amount: null,
      vehiculo: null,
      cierre: null,
      interes: null,
      meses: null,
      prestamo: null
    },
    methods:{
      gastoCierre: function(){
        this.cierre = parseInt(this.amount) * 0.1;
        return this.cierre;
      },
      totalPrestamo: function(){
         this.prestamo = parseInt(this.amount) + this.gastoCierre();
         return this.prestamo;
      },
      submit: function (e) {
        this.gastoCierre();
        this.totalPrestamo();
      }
    }
  })