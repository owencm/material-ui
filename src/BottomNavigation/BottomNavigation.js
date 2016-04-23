/**
 * TODOs:
 * - Tidy up code
 * - Add correct documentation
 * - Support custom highlight colors
 * - Support custom highlight color per selected item
 * - Support badged icons
 * - Support showing label only for selected item
 * - Add constraints for number of children provided
 * - Apply width rules on BottomNavigationItems
 * - Enforce appropriate label length and avoid overflows/breaks
 * - V2: Support custom background color on bar depending on selected item
 * - V2: Support expanding width of selected item
 * - V2: Add scrolling behaviours (hiding)
 * - V2: Determine how to handle larger displays (menu on left)
 */

import React from 'react';
import IconButton from '../IconButton';
import NavigationMenu from '../svg-icons/navigation/menu';
import Paper from '../Paper';
import propTypes from '../utils/propTypes';
import warning from 'warning';

function getStyles(props, context) {
  const {
    bottomNavigation,
    zIndex,
  } = context.muiTheme;

  const flatButtonSize = 36;

  const styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.bottomNavigation,
      width: '100%',
      display: 'flex',
      backgroundColor: bottomNavigation.color,
      height: bottomNavigation.height,
    },
  };

  return styles;
}

class BottomNavigation extends React.Component {
  static muiName = 'BottomNavigation';

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.initialSeletedIndex !== undefined ? props.initialSeletedIndex : -1,
    };
  }

  static propTypes = {
    /**
     * Applied to the app bar's root element.
     */
    className: React.PropTypes.string,

    /**
     * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
     * prop `label` that value will be used to render the representation of that
     * item within the field.
     */
    children: React.PropTypes.node,

    initialSeletedIndex: React.PropTypes.number,

    /**
     * Override the inline-styles of the element displayed on the right side of the app bar.
     * @param {object} event TouchTap event targeting the left.
     */
    onItemSelected: React.PropTypes.func,

    /**
     * Override the inline-styles of the root element.
     */
    style: React.PropTypes.object,

    /**
     * The zDepth of the component.
     * The shadow of the app bar is also dependent on this property.
     */
    zDepth: propTypes.zDepth,
  };

  static defaultProps = {
    zDepth: 1,
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  };

  componentDidMount() {
    // warning(!this.props.iconElementLeft || !this.props.iconClassNameLeft, `Properties iconElementLeft
    //   and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.`);
  };

  handleItemTouchTap(childIndex, event) {
    if (this.props.onItemSelected) {
      this.props.onItemSelected();
    }
    this.setState({selectedIndex: childIndex});
  };


  render() {
    const {
      className,
      children,
      style,
      zDepth,
      ...other,
    } = this.props;

    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    const childWidth = `${100/React.Children.count(children)}%`;
    const preparedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        style: Object.assign({}, child.props.style, {width: childWidth}),
        onTouchTap: (event) => { this.handleItemTouchTap(index, event) },
        selected: index === this.state.selectedIndex
      });
    });

    return (
      <Paper
        {...other}
        className={className}
        style={Object.assign({}, styles.root, style)}
        zDepth={zDepth}
      >
        {preparedChildren}
      </Paper>
    );
  }
}

export default BottomNavigation;
