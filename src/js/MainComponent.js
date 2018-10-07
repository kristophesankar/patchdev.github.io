import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";

export default {
    components: {
        VueTypedJs
    },
    methods: {

        toggleNav: function () {
            let element = document.getElementById("sidenav");
            //if class is closed
            if (element.classList.contains("nav-closed")) {
                document.getElementById("sidenav").style.width = "200px";
                document.getElementById("main").style.marginLeft = "200px";
                element.classList.add("nav-open");
                if (element.classList.contains("nav-closed")) {
                    element.classList.remove("nav-closed");
                }
            } else {
                document.getElementById("sidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";

                element.classList.add("nav-closed");
                if (element.classList.contains("nav-open")) {
                    element.classList.remove("nav-open");
                }
            }
        }

    },
    props: {
        pagetitle: {
            type: String,
            required: false
        }
    }
};