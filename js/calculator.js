var app = new Vue({
  el: "#calculator",
  data: {
    errors: [],
    amount: null,
    year: null,
    cierre: null,
    tasa: null,
    interes: null,
    totalInteres: null,
    capitalInteres: null,
    meses: null,
    cuotas: null,
    prestamo: null,
    precio: null
  },
  methods: {
    getTasa: function () {
      let year = parseInt(this.year);
      switch (year) {
        case 2007: case 2008: case 2009:
          this.tasa = 2.5;
          break;
        case 2010: case 2011:
          this.tasa = 2.3;
          break;
        case 2012:
          this.tasa = 2.1;
          break;
        case 2014: case 2015: case 2016:
          this.tasa = 1.9;
          break;
        case 2017: case 2018:
          this.tasa = 1.8;
          break;
        case 2019: case 2020:
          this.tasa = 1.5;
          break;
        default:
          this.tasa = 3.5;
      }

      this.tasa = this.tasa / 100;
      return this.tasa;
    },
    gastoCierre: function () {
      this.cierre = parseInt(this.amount) * 0.1;
      return this.cierre;
    },
    totalPrestamo: function () {
      this.prestamo = parseInt(this.amount) + this.gastoCierre();
      return this.prestamo;
    },
    getInteres: function(){
      this.interes = this.prestamo * this.tasa;
      return this.interes;
    },
    getTotalInteres: function(){
      this.totalInteres = (this.interes * parseInt(this.meses));
      return this.totalInteres;
    },
    getCapitalInteres: function(){
      this.capitalInteres =  (this.totalInteres + this.prestamo);
      return this.capitalInteres;
    },
    getTotalCuotas: function(){
      this.cuotas = this.capitalInteres / parseInt(this.meses);
      this.cuotas = this.cuotas.toFixed(2);
      return this.cuotas;
    },
    submit: function () {
      this.totalPrestamo();
      this.getTasa();
      this.getInteres();
      this.getTotalInteres();
      this.getCapitalInteres();
      this.getTotalCuotas();
    },
    reset: function(){
      document.getElementById('calculator').reset();
    }
  },
});
