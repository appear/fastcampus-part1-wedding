import classNames from 'classnames/bind'

import styles from './Video.module.scss'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video
        src="/assets/main.mp4"
        autoPlay
        loop
        muted
        poster="/assets/poster.jpg"
      />
    </Section>
  )
}

export default Video
