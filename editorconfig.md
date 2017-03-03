# Set up editorconfig

We noticed that our diffs were larger than they should be as Akin's set up was automatically formatting his files with 4-space-indents, whereas my editor was set-up to use 2-space-indents.

To stop this happening we quickly created a `.editorconfig` file at the root of the project (and installed the relevant plugins for our editors - `apm install editorconfig` for Atom users).

Now both of our editors use the same size indents when we hit tab, and our diffs should only include relevant code changes.
