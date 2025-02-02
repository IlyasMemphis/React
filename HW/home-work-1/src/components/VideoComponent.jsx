import React from 'react'

export default function VideoComponent() {
  return (
    <div>
      <iframe
        width={560}
        height={315}
        src='https://www.youtube.com/watch?v=kh4y_AyX_1M'
        title='Араб не может спеть потому что смеётся мем'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  )
}
