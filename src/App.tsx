import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './App.module.scss'
import Heading from './components/sections/Heading'
import Video from './components/sections/Video'

import FullScreenMessage from './components/shared/FullScreenMessage'
import { Wedding } from '@models/wedding'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }

        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding == null) {
    return null
  }

  const { date } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
