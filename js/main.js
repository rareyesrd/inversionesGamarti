Vue.component("zz-accordion", {
  props: ["contents"],
  data: function () {
    return {};
  },
  methods: {
    expand: function (i) {
      let el = this.$refs["accordion-body-" + i][0];

      if (this.contents[i].active === false) {
        this.contents[i].active = true;

        TweenLite.to(el, 1, {
          height: el.scrollHeight,
          ease: Elastic.easeOut.config(1, 0.3),
        });
      } else {
        this.contents[i].active = false;

        TweenLite.to(el, 0.5, {
          height: 0,
          ease: Bounce.easeOut,
        });
      }
    },
  },

  template: `
<div class="accordion">
	<div
		class="accordion-item"
		v-for="content, i in contents"
		v-bind:class="{ 'accordion-active': content.active }"
	>
		<div class="accordion-header">
			<a href="#" v-on:click.prevent="expand(i)">
				<div class="accordion-header-div">{{ content.title }}</div>
				<div class="accordion-header-div">
					<div class="accordion-caret"></div>
				</div>
			</a>
		</div>
		<div class="accordion-body" v-bind:ref="'accordion-body-' + i">
			<div class="accordion-content">{{ content.description }}</div>
		</div>
	</div>
</div>
`,
});

// ----------

var app = new Vue({
  el: "#app",
  data: {
    contents: [
      {
        title: "Misión",
        description:
          "Ofrecer soluciones financieras a tiempo, con la calidad humana, comodidad y la rapidez que nos caracteriza, con la finalidad de satisfacer y llenar las expectativas de cada cliente.",
        active: false,
      },
      {
        title: "Visión",
        description:
          "Ser la opción preferida en soluciones financieras, convirtiendo las oportunidades en realidad, a través de un equipo calificado comprometido con las metas de nuestros clientes.",
          active: false,
      },
      {
        title: "Valores",
        description: "Responsabilidad, Respeto, Integridad, Empatía, Innovación",
        active: false,
      },
    ],
  },
});
