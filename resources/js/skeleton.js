import { defineCustomElement } from 'vue'
import VoletFeature from './components/VoletFeature.ce.vue'

const Element = defineCustomElement(VoletFeature)

customElements.define('skeleton', Element)
