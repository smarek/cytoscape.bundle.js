# Cytoscape.bundle.js

Bundle containing cytoscape.js along with layouts and all dependencies needed to use in web browser

### How to build

```
yarn install
esbuild app.jsx --bundle --sourcemap --target=chrome58,firefox57,safari11,edge16 --outfile=dist/cytoscape.bundle.js
```


### Current versions

```
> yarn list
├─ avsdf-base@1.0.0
│  └─ layout-base@^1.0.0
├─ cose-base@1.0.3
│  └─ layout-base@^1.0.0
├─ cytoscape-cise@1.0.0
│  ├─ avsdf-base@^1.0.0
│  └─ cose-base@^1.0.0
├─ cytoscape-cola@2.4.0
│  └─ webcola@^3.4.0
├─ cytoscape-dagre@2.3.2
│  └─ dagre@^0.8.5
├─ cytoscape-klay@3.1.4
│  └─ klayjs@^0.4.1
├─ cytoscape@3.17.1
│  ├─ heap@^0.2.6
│  └─ lodash.debounce@^4.0.8
├─ d3-dispatch@1.0.6
├─ d3-drag@1.2.5
│  ├─ d3-dispatch@1
│  └─ d3-selection@1
├─ d3-path@1.0.9
├─ d3-selection@1.4.2
├─ d3-shape@1.3.7
│  └─ d3-path@1
├─ d3-timer@1.0.10
├─ dagre@0.8.5
│  ├─ graphlib@^2.1.8
│  └─ lodash@^4.17.15
├─ graphlib@2.1.8
│  └─ lodash@^4.17.15
├─ heap@0.2.6
├─ klayjs@0.4.1
├─ layout-base@1.0.2
├─ lodash.debounce@4.0.8
├─ lodash@4.17.20
└─ webcola@3.4.0
   ├─ d3-dispatch@^1.0.3
   ├─ d3-drag@^1.0.4
   ├─ d3-shape@^1.3.5
   └─ d3-timer@^1.0.5
```
