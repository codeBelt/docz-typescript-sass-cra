import styles from './PillButton.module.scss';

import React from 'react';
import classNames from 'classnames';

interface IProps {
  readonly isActive?: boolean;
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  readonly className: string;
}
interface IState {}

export default class PillButton extends React.PureComponent<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    isActive: false,
    onClick: () => void 0,
    className: '',
  };

  public state: IState = {};

  public render(): JSX.Element {
    const { isActive, onClick, children, className } = this.props;
    const cssClasses: string = classNames(className, {
      [styles.wrapper]: true,
      [styles.isActive]: isActive,
    });

    return (
      <button type="button" className={cssClasses} onClick={onClick}>
        {children}
      </button>
    );
  }
}
