import classNames from 'classnames/bind'

import styles from './Video.module.scss'
import Section from '../shared/Section'

const cx = classNames.bind(styles)

function Video() {
  return <Section className={cx('container')}>Video</Section>
}

export default Video
