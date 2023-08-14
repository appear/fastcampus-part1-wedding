import classNames from 'classnames/bind'
import styles from './Dimmed.module.scss'

const cx = classNames.bind(styles)

function Dimmed({ children }: { children: React.ReactNode }) {
  return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed
