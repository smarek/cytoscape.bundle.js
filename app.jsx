import cytoscape from 'cytoscape'
import cise from 'cytoscape-cise'
import dagre from 'cytoscape-dagre'
import cola from 'cytoscape-cola'
import klay from 'cytoscape-klay'


globalThis.cytoscape = cytoscape

cytoscape.use(cise)
cytoscape.use(dagre)
cytoscape.use(cola)
cytoscape.use(klay)
