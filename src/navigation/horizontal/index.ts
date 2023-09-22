// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline'
  },
  {
    title: 'Attendance',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    title: 'Leave',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    title: 'Infraction',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    title: 'Configuration',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    title: 'Settings',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'EmployeeStatus',
        path: '/menu_settings/EmployeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/Autograph'
      }
    ]
  },
  {
    title: 'Company',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    title: 'Salary Master',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    title: 'Salary',
    // path: '/second-page',
    icon: 'mdi:email-outline',
    children: [
      {
        title: 'Employee Status',
        path: '/menu_settings/employeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/autograph'
      }
    ]
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Access Control',
    icon: 'mdi:shield-outline'
  }
]

export default navigation
