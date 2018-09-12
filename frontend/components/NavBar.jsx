import React from 'react';
import NavTab from './NavTab.jsx';
import Homepage from './Homepage.jsx';
import AboutUs from './AboutUs.jsx';
import NavTabDropdown from './NavTabDropdown.jsx';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props);
         this.tabs = [
            {
                title: 'Home',
                link: '/'
            },
            {
                title: 'Symposium',
                link: '/symposium',
                options: [
                    {
                        title: 'Schedule',
                        link: '/symposium/schedule'
                    },
                    {
                        title: 'Poster Guidelines',
                        link: '/symposium/poster-guidelines'
                    },
                    {
                        title: 'Directions',
                        link: '/symposium/directions'
                    },
                ]
            },
            {
                title: 'Workshops',
                link: '/workshops',
                options: [
                    {
                        title: 'August 2018',
                        link: '/workshops/august-2018'
                    }
                ]
            },
            {
                title: 'Emissaries',
                link: '/research/emissaries'
            },
            {
                title: 'Education',
                options: [
                    {
                        title: 'Summer Students',
                        link: '/education/summer-students',
                    },
                    {
                        title: 'UTRA at Brown',
                        link: '/education/utra'
                    }
                ]
            },
            {
                title: 'MBL Practicum',
                link: '/mbl',
                options: [
                    {
                        title: 'FAQs',
                        link: '/mbl/faqs'
                    },
                    {
                        title: '2018 Practicum',
                        link: '/mbl/2018-practicum'
                    },
                    {
                        title: 'Apply',
                        link: '/mbl/apply'
                    },
                ]
            },
            {
                title: 'Data',
                link: '/data',
                options: [
                    {
                        title: 'BDR Collection',
                        link: 'https://repository.library.brown.edu/studio/collections/id_784/',
                        extraClass: 'bl-dropdown__item--small-parent',
                        linkTarget: '_blank'
                    }
                ]
            },
            {
                title: 'About Our Hub',
                link: '/about-us'
            },
            {
                title: 'Contact Us',
                link: '/contact-us'
            }
        ];

        this.renderTabs = this.renderTabs.bind(this);
    }

    isCurrentTab(tab) {
        if (tab.title == 'MBL Practicum') {
            return window.location.pathname.match('/mbl/');
        }

        let isActive = false;
        for(let i=0; i<tab.options.length; i++) {
            if (tab.options[i].link == window.location.pathname) {
                isActive = true;
                break;
            }
        }

        return isActive;
    }

    renderTabs(tabs) {
        return tabs.map((tab, idx) => {
            if (tab.options) {
                return (
                    <NavTabDropdown
                        key={idx}
                        titleLink={tab.link}
                        title={tab.title}
                        options={tab.options}
                        isActive={this.isCurrentTab(tab)}
                    />
                );
            } else {
                return (
                    <NavTab
                        key={idx}
                        title={tab.title}
                        isActive={tab.link == window.location.pathname}
                        link={tab.link}
                    />
                );
            }
        });
    }

    render() {
        return (
            <div>
                <div className='bl-nav-bar-wrapper clearfix'>
                    <ul className='bl-nav-bar'>
                        {this.renderTabs(this.tabs)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
