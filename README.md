# Snake JS - Canvas/JavaScript based Snake Game.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
	<img src="./src/img/snake-js.png" width="222" height="267" />
	<img src="./src/img/screen1.png" height="267" />
</p>

## Features

- Score tracking.
- Gamepad support for the following:
	- SNES (Tested on [Mayflash/Huijia USB Adapter](http://a.co/0zO06aL) and confirmed working)
	- PS4 (Tested and confirmed working)
	- PS3 (Not tested but should work)
	- XBOX ONE (Not tested but should work)
	- XBOX 360 (Not tested but should work)

- Snake can wrap around edge of game area.
- Ability to pause game.
- Developed in Canvas and JavaScript.
- Support for major Linux distributions (AppImage, Snap, Debian, RPM, Arch Linux (Pacman), Alpine Linux (APK), and ZIP)
- Support for FreeBSD


## Getting Started

For development, clone the repository and follow the rest of the instructions. For general usage, see the [GitHub Releases](https://github.com/aenany/snake.js/releases) page.

### Prerequisites

You will need:

```
Node.js v12.4.0+
```

### Installing

Install Node.js modules by navigating to the root of the repository and running:

```
npm install
```

Once modules are installed, please run:

```
npm run start
```

# Building the Linux binaries

Ability to build the above mentioned binaries were accomplished in Kubuntu 18.04 LTS with the following dependencies / commands:

```
sudo apt install rpm
sudo apt install build-essential
sudo apt install ruby ruby-dev rubygems gcc make
sudo apt install makepkg
sudo apt install bsdtar
```

Once that is complete, install the npm packages.

Then run the following command:

`npm run dist`

The binaries will output to the `dist/` folder.

# Publishing Binaries

## GitHub
Set the `GH_TOKEN` environment variable, then run `GH_TOKEN=$GH_TOKEN npm run release` to publish a new version of the software as a draft to your repository.

## Built With

* [Node.js](https://nodejs.org) - JavaScript runtime environment
* [Electron](https://electronjs.org/) - Desktop application framework for Node.js

## Contributing

Please read [CONTRIBUTING.md](https://github.com/aenany/snake.js/blob/master/CONTRIBUTING.md) for the process for submitting pull requests to the project.

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/aenany/google-hangouts-chat-linux/project/tags). 

## Authors

* **A Enany** - *Initial work* - [aenany](https://github.com/aenany)

See also the list of [contributors](https://github.com/aenany/google-hangouts-chat-linux/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
