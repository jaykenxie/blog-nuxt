import Vue from "vue";

import {
  Button,
  Carousel,
  CarouselItem,
  Icon,
  BackTop,
  Avatar,
  Poptip,
  Modal,
  Message
} from "iview";

Vue.component("Button", Button);
Vue.component("Carousel", Carousel);
Vue.component("CarouselItem", CarouselItem);
Vue.component("Icon", Icon);
Vue.component("BackTop", BackTop);
Vue.component("Avatar", Avatar);
Vue.component("Poptip", Poptip);

Vue.prototype.$Message = Message;
