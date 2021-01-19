import * as cytoscape_core from 'cytoscape'
import * as layout_cise from 'cytoscape-cise'
import * as layout_dagre from 'cytoscape-dagre'
import * as layout_cola from 'cytoscape-cola'
import * as layout_klay from 'cytoscape-klay'

cytoscape.use(layout_cise, 'cise')
cytoscape.use(layout_dagre, 'dagre')
cytoscape.use(layout_cola, 'cola')
cytoscape.use(layout_klay, 'klay')

globalThis.cytoscape = cytoscape_core.default
