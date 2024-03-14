"use client"

import React, { useEffect, useRef, useState } from "react"
import { Player } from "bitmovin-player"
import { UIFactory } from "bitmovin-player/bitmovinplayer-ui"
import "bitmovin-player/bitmovinplayer-ui.css"

function BitmovinPlayer() {
  const [player, setPlayer] = useState(null)

  const playerConfig = {
    key: "dcbf46e6-c70f-400d-a0da-3d703fb6143d",
    ui: false,
  }

  const playerSource = {
    dash: "https://mdstrm.com/video/659ef511c183b27ac3bd0cac.mpd",
    hls: "https://mdstrm.com/video/659ef511c183b27ac3bd0cac.m3u8",
    poster:
      "https://thumbs.cdn.mdstrm.com/thumbs/62fd48e7a1324543b4a28c0d/659ef511c183b27ac3bd0cac/preview_659ef511c183b27ac3bd0cac.vtt",
  }
  const playerDiv = useRef()

  useEffect(() => {
    function setupPlayer() {
      const playerInstance = new Player(playerDiv.current, playerConfig)
      UIFactory.buildDefaultUI(playerInstance)
      playerInstance.load(playerSource).then(
        () => {
          setPlayer(playerInstance)
          console.log("Successfully loaded source")
        },
        () => {
          console.log("Error while loading source")
        },
      )
    }

    setupPlayer()

    return () => {
      function destroyPlayer() {
        if (player != null) {
          player.destroy()
          setPlayer(null)
        }
      }

      destroyPlayer()
    }
  }, [])

  return <div id="player" ref={playerDiv} />
}

export default BitmovinPlayer
