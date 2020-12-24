export const openFullscreen = () => {
  const elem = document.documentElement as HTMLElement & {
    mozRequestFullScreen(): Promise<void>
    webkitRequestFullscreen(): Promise<void>
    msRequestFullscreen(): Promise<void>
  }

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen()
  }
}

export const closeFullscreen = () => {
  const elem = document as Document & {
    mozCancelFullScreen(): Promise<void>
    webkitExitFullscreen(): Promise<void>
    msExitFullscreen(): Promise<void>
    webkitIsFullScreen: any
    mozfullScreen: any
    fullScreen: any
  }

  if (elem.fullScreen || elem.mozfullScreen || elem.webkitIsFullScreen) {
    if (elem.exitFullscreen) {
      elem.exitFullscreen()
    } else if (elem.mozCancelFullScreen) {
      elem.mozCancelFullScreen()
    } else if (elem.webkitExitFullscreen) {
      elem.webkitExitFullscreen()
    } else if (elem.msExitFullscreen) {
      elem.msExitFullscreen()
    }
  }
}
