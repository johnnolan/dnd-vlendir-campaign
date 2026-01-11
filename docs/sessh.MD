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

`ffmpeg -i "2026-01-11 20-23-28.mkv"`

### Export 2nd voice channel

`ffmpeg -i "2026-01-11 20-23-28.mkv" -map 0:2 -ac 1 -ar 16000 "2026-01-11 20-23-28.wav"`

### Drag into NotebookLM
