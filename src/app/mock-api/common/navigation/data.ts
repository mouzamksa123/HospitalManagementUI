/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

let menuList: any = [
    {
        id   : 'Reception',
        title: 'Reception',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id      : 'pages.authentication',
                title   : 'Patient',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Register',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'View / Edit',
                        type    : 'basic',
                        link    : ''
                    }
                ]
            },
            {
                id      : 'pages.authentication',
                title   : 'Appointment',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Schedule',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Manage',
                        type    : 'basic',
                        link    : ''
                    }
                ]
            }
        ],
        link:''
    },
    {
        id   : 'Hospital Setup',
        title: 'hospitalSetup',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id      : 'pages.authentication',
                title   : 'Branches',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Register',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'View / Edit',
                        type    : 'basic',
                        link    : ''
                    }
                ]
            },
            {
                id      : 'pages.authentication',
                title   : 'Clinic',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Register',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'View / Edit',
                        type    : 'basic',
                        link    : ''
                    }
                ]
            },
            {
                id      : 'pages.authentication',
                title   : 'Doctor',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Search',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Registration',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Clinic Mapping',
                        type    : 'basic',
                        link    : ''
                    }
                ]
            },
            {
                id      : 'pages.authentication',
                title   : 'Mapping',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Branch - Clinic',
                        type    : 'basic',
                        link    : ''
                    },
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Clinic - Doctor',
                        type    : 'basic',
                        link    : ''
                    }
                ]
            }
        ],
        link:''
    }
]

export const defaultNavigation: FuseNavigationItem[] = menuList;
export const compactNavigation: FuseNavigationItem[] = menuList;
export const futuristicNavigation: FuseNavigationItem[] = menuList;
export const horizontalNavigation: FuseNavigationItem[] = menuList;
