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
        title: 'Employee Status',
        path: '/menu_settings/EmployeeStatus'
      },
      {
        title: 'Autograph',
        path: '/menu_settings/Autograph'
      },
      {
        title: 'Job Title',
        path: '/menu_settings/Job'
      },
      {
        title: 'Work Shift',
        path: '/menu_settings/WorkShift'
      },
      {
        title: 'Department',
        path: '/menu_settings/Department'
      },
      {
        title: 'Education',
        path: '/menu_settings/Education'
      },
      {
        title: 'Language',
        path: '/menu_settings/Language'
      },
      {
        title: 'Skill',
        path: '/menu_settings/Skill'
      },
      {
        title: 'Nationalities',
        path: '/menu_settings/National'
      },
      {
        title: 'Immigration Issuer',
        path: '/menu_settings/Immigration'
      },
      {
        title: 'Termination Reasons',
        path: '/menu_settings/Termination'
      },
      {
        title: 'Cut-Off Period',
        path: '/menu_settings/CutOff'
      },
      {
        title: 'Holiday Setup',
        path: '/menu_settings/Holiday_2'
      },
      {
        title: 'Batch',
        path: '/menu_settings/Batch'
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
