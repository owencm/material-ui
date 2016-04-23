import React from 'react';
import ReactDOM from 'react-dom';
import shallowEqual from 'recompose/shallowEqual';
import EnhancedButton from '../internal/EnhancedButton';

function getStyles(props, context, state) {
  const {selected} = props;

  const {muiTheme} = context;
  const {bottomNavigation} = muiTheme;

  const color = selected ? bottomNavigation.selectedColor :
                           bottomNavigation.unselectedColor;
  const styles = {
    label: {
      fontSize: selected ? bottomNavigation.selectedFontSize :
                           bottomNavigation.unselectedFontSize,
      marginTop: '-3px',
      transition: 'all 0.3s',
      color: color,
    },
    icon: {
      display: 'block',
      marginTop: '2px',
    },
    iconColor: color,
  };

  return styles;
}

class BottomNavigationItem extends React.Component {
  static muiName = 'BottomNavigationItem';

  static propTypes = {
    label: React.PropTypes.string,
    icon: React.PropTypes.node,
    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,
  };

  static defaultProps = {

  };

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState)
    );
  }

  // createLabelElement(styles, contentChildren, additionalProps) {
  //   const {
  //     innerDivStyle,
  //     style,
  //   } = this.props;
  //
  //   const mergedLabelStyles = Object.assign({},
  //     styles.root,
  //     styles.innerDiv,
  //     innerDivStyle,
  //     styles.label,
  //     style
  //   );
  //
  //   return (
  //     <label
  //       {...additionalProps}
  //       style={this.context.muiTheme.prepareStyles(mergedLabelStyles)}
  //     >
  //       {contentChildren}
  //     </label>
  //    );
  // }

  render() {
    const {
      label,
      icon,
      style,
      ...other,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context, this.state);

    const styledIcon = React.cloneElement(icon, {
      style: Object.assign({}, icon.style, styles.icon),
      color: styles.iconColor,
    });

    return (
      <EnhancedButton
        {...other}
        style={Object.assign({}, styles.root, style)}
      >
        {styledIcon}
        <div style={styles.label}>{label}</div>
      </EnhancedButton>
    );
  }
}

export default BottomNavigationItem;
