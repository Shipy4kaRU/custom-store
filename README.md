# TOWER STORE

Store like zustand. 

But brah, IDK why but for every Card in Profiler/flamegraph, the component can still be highlighted, at the same time, the rendering log does not work. I read it can be because:
React processed this component in this commit: it went around the tree, called getSnapshot for it, compared the snapshot and decided not to re-render.
DevTools often shows "the component participated in this commit" (fiber was affected), rather than strictly "the component function was called"

So I will try to understand
