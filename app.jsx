import cytoscape from 'cytoscape'
import cise from 'cytoscape-cise'
import dagre from 'cytoscape-dagre'
import cola from 'cytoscape-cola'
import klay from 'cytoscape-klay'
import hierarchical from 'cytoscape-hierarchical'
import markovCluster from 'cytoscape-markov-cluster'
import svg from 'cytoscape-svg'

globalThis.cytoscape = cytoscape

cytoscape.use(cise)
cytoscape.use(dagre)
cytoscape.use(cola)
cytoscape.use(klay)
cytoscape.use(hierarchical)
cytoscape.use(markovCluster)
cytoscape.use(svg)
