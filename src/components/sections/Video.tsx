import classNames from 'classnames/bind'

import styles from './Video.module.scss'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video autoPlay loop muted poster="/assets/poster.jpg">
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
