graceful-fs-extra
===

[node-fs-extra](https://github.com/jprichardson/node-fs-extra) but on top of [graceful-ncp](https://github.com/adam-lynch/graceful-ncp) instead of [ncp](https://github.com/AvianFlu/ncp) (because graceful-ncp uses [graceful-fs](https://github.com/isaacs/node-graceful-fs)). This protects you against `EMFILE` errors when opening too many files, etc.

## Installation

`npm install graceful-fs-extra`

## API

The exact same as [node-fs-extra](https://github.com/jprichardson/node-fs-extra)'s.