import React, { Children, cloneElement, PropTypes } from 'react';
import NavGroup from './NavGroup';
import Nav from './Nav';
import assign from 'object-assign';

const SideNav = React.createClass({

    propTypes: {
        selected: PropTypes.string,
        navs: PropTypes.array,
        onSelection: PropTypes.func,
        children: PropTypes.node,
        navtype: PropTypes.string,
        navrenderer: PropTypes.node,
        style: PropTypes.object,
        tocount: PropTypes.object,
    },

    buildFromSettings() {

        return this.props.navs.map( navkind => {
            //nav kind could have a navlist, which we assume it contains a group of navs link
            if ( navkind.navlist ) {
                return <NavGroup type={this.props.navtype}
                    key={navkind.id}  selected={this.props.selected} onClick={this.onSubNavClick} nav={navkind}/>;
            } else {
                return (<Nav
                      type={this.props.navtype}
                      key={navkind.id}
                      selected={this.props.selected}
                      {...navkind}
                        onClick={this.onClick}
                        navClassName="itemList"
                        activeNavClassName="itemList-active"
                      />);
            }
        });

    },
    onSubNavClick(group,child) {
        var selection = {group: group, id: child};
        this.setState({selected: selection});
        this.dispatchSelection(selection);
    },
    onClick(id) {
        this.dispatchSelection({id: id});
    },

    dispatchSelection: function(selection) {
        if ( this.props.onSelection ) {
            this.props.onSelection(selection);
        }
    },
    buildChildren() {

        if ( this.props.navs ) {
            return this.buildFromSettings();
        } else {
            //we need to clone this or props aren't passed
            return Children.map(this.props.children, child => {
                return cloneElement(child, assign({key: child.props.id}, this.props));
            });
        }
    },

    render() {

        return <div style={assign({position: 'relative', width: '100%', color: '#FFF'}, this.props.style)}>
                {this.buildChildren()}
        </div>;
    }

});
export {SideNav};
export default SideNav;
