# Session Recording

## Pre-session

Run `helvum`

### Link Discord, Yeti and Chrome to 2 new outputs

* Chrome -> Chrome Bus
* Discord -> Voices Bus
* Yeti -> Voices Bus

## After

### Backup mkv

* Ensure drive mounted
* Run script

### Get Channels available

`cd /run/media/jnolan/Media/media/Vlendir/`

`ffmpeg -i "2025-12-22 20-42-06.mkv"`

### Export 2nd voice channel

`ffmpeg -i "2025-12-28 20-46-05.mkv" -map 0:2 -ac 1 -ar 16000 "2025-12-28 20-46-05.wav"`

### Drag into NotebookLM
