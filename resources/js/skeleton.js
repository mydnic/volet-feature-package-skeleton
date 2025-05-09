import { defineCustomElement } from 'vue'
import Skeleton from './components/Skeleton.ce.vue'

const Element = defineCustomElement(Skeleton)

customElements.define('skeleton', Element)
