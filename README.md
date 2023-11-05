# fork notes

### THIS FORK WILL NOT BE MAINTAINED OR UPDATED.

#### I suggest using [ArtBot](https://github.com/daveschumaker/artbot-for-stable-diffusion) instead 😏


This is a fork of aqualxx/stable-ui, an unmaintained frontend for <a href="https://aihorde.net">AI Horde</a> 
crowd-sourced stable diffusion. It contains all the same bugs and limitations the original stable-ui 
contains, but has been updated to support SDXL, ~~which currently requires a batch size of 2~~, and recommends a 
minimum of 1024x1024. ~~Instead of updating this properly, I've simply added a check to see if the model 
includes SDXL, and changed the requested number of images to 2; that means for every 1 SDXL image you 
request here, you'll get 2 images back instead of 1.~~ The only niceties I've added beyond this is to set the 
default model to SDXL and the defaults size to 1024x1024. Everything else is the same.

Update: I applied a fix to the leaderboard, [as found by @super.skirv on Discord](https://discord.com/channels/781145214752129095/1107629376889172098/1157447364827697182).

Update: I applied a fix to space out requests because horde now has a rate limit on async endpoints. Since Horde 
now supports SDXL officially, I also swapped out sdxl_beta model name for SDXL 1.0 and removed the inpainting 
and image amount overrides from it.

# stable-ui 🔥

[Stable UI](https://aqualxx.github.io/stable-ui/) is a web user interface designed to generate, save, and view images using Stable Diffusion, with the goal being able to provide Stable Diffusion to anyone for 100% free.

This is achieved using [Stable Horde](https://stablehorde.net/), a crowdsourced distributed cluster of Stable Diffusion workers, which makes this tool available for anyone to use regardless if they don't have the processing power to run Stable Diffusion themselves.

<p align="center">
  <img src="https://github.com/aqualxx/stable-ui/blob/main/doc/generate_showcase.png" style="width: 100%" />
</p>

<p align="center">
  <img src="https://github.com/aqualxx/stable-ui/blob/main/doc/images_showcase.png" style="width: 100%"/>
</p>

## Features

* 🎨 Image generation utilizing Stable Horde
  * No installation required!
* ⚙️ Tons of customizable settings
  * Support for Text2Img, Img2Img, and Inpainting
  * Adjust settings for resolution, batch size, NSFW, etc
  * Employ over 50 different Stable Diffusion models!
* 🖼️ A gallery to view all generated images
  * Favourite, download, delete, and share images
  * Reuse image settings for Text2Img or send back an image for Img2Img or inpainting
  * Use batch selection to perform actions on multiple images at a time
  * Store images locally through the browser
* 📰 A dashboard for displaying Stable Horde info
  * View horde/user statistics
  * Edit your Stable Horde workers
  * See user rankings through a leaderboard
  * Read updates through a news feed
* 📜 Statistics for each available Stable Horde worker, team, or model
  * Sort by parameter or filter by name
* 💻 Optimized designs for both desktop and mobile devices

## Contributing

Feel free to contribute! Pull requests are welcome.

## Special Thanks To

| Library | Description |
| :------ | :---------- |
| [Vue 3](https://vuejs.org/)                  | An amazing Javascript framework |
| [Pinia](https://pinia.vuejs.org/)            | For creating Vue stores |
| [Element Plus](https://element-plus.org/)    | Beautiful Vue 3 components |
| [VueUse](https://vueuse.org/)                | Tons of useful hooks |
| [XIcons](https://github.com/07akioni/xicons) | An extensive library of icons |

## License

[MIT License](https://github.com/graphql-python/gql/blob/master/LICENSE)
