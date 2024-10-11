import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import Testb from '@/components/testb.vue';
import extemplate from '@/components/extemplate.vue';
import vif from '@/components/vif.vue';
import vshow from '@/components/vshow.vue';
import vfor from '@/components/vfor.vue';
import vbind from '@/components/vbind.vue';
import von from '@/components/von.vue';
import vmodel from '@/components/vmodel.vue';
import ComponentePadre from '@/components/ComponentePadre.vue';
import Padre from '@/components/Padre.vue';


const routes = [
{ path: '/', component: Padre },
// { path: '/about', component: AboutView },
]
export const router = createRouter({
history: createMemoryHistory(),
routes,
})