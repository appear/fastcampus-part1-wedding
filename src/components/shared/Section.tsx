import classNames from 'classnames/bind'

import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Section({
  className,
  children,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section
