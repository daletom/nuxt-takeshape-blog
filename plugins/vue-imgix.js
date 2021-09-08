import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "images.takeshape.io",
    defaultIxParams: {
        auto: 'format',
        ch: 'width, dpr'
    },
})