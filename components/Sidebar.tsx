import classNames from 'classnames';
import React, { useMemo } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from 'next/link';

interface MenuItemType {
  id: number,
  label: string,
  icon: string,
  link: string
}

const menuItems = [
  { id: 1, label: 'Dashboard', icon: '/images/icons/home.svg', link: '/' },
  { id: 2, label: 'Billing', icon: '/images/icons/payout.svg', link: '/billing' },
  { id: 3, label: 'Payment Form', icon: '/images/icons/payout.svg', link: '/paymentform' },
  { id: 4, label: 'Subscription', icon: '/images/icons/payout.svg', link: '/subscription' },
]

const menuFooterItems = [
  { id: 5, label: 'Account Setting', icon: '/images/icons/settings.svg', link: '/' },
  { id: 6, label: 'Support', icon: '/images/icons/redirect.svg', link: '/' },
  { id: 7, label: 'FAQ', icon: '/images/icons/redirect.svg', link: '/' }
]


const Sidebar = () => {

  const router = useRouter()
  const activeMenu = useMemo(():any => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

  const wrapperclassname = classNames(
    '  flex flex-col space-between justify-between h-screen px-4 pt-5 pl-5 pb-5 bg-primary w-80 font-dark '
  )

  const getSideItemClasses = (menu: any) => {
    return classNames('flex flex-row items-center transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-primary-hover-blue hover:text-primary-blue',
      {
        ['text-primary-blue bg-primary-hover-blue']: activeMenu.id === menu.id
      })
  }

  return (
    // Navigation desktop
    <div className={wrapperclassname}>
      <div className=''>
        <div className='mb-2.5'>
          {/* Dashboard Icon */}
          <Image
            src="/images/billplz-logo.svg"
            alt="Billplz Logo"
            className="relative"
            width={217}
            height={34}
          />
        </div>

        {/* Organization Store And Name  */}
        <div className='mt-2.5 flex items-center h-12'>
          <div className='-translate-x-1 '>
            <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1069_2967)">
                <circle cx="20" cy="18" r="16" fill="#202D41" />
              </g>
              <g clip-path="url(#clip0_1069_2967)">
                <path d="M26.667 10.2373C26.6009 10.1236 26.5062 10.0292 26.3922 9.96357C26.2783 9.89794 26.1491 9.86336 26.0176 9.86328H13.9678C13.8363 9.86336 13.7071 9.89794 13.5931 9.96357C13.4792 10.0292 13.3844 10.1236 13.3184 10.2373L11.3106 13.7051C11.2449 13.8195 11.2102 13.9491 11.21 14.0811V15.3457C11.2099 15.4198 11.2208 15.4935 11.2422 15.5644C11.3512 15.9356 11.5358 16.2802 11.7844 16.5766C12.0329 16.8729 12.3401 17.1148 12.6865 17.2868V25.5303C12.6866 25.7291 12.7656 25.9199 12.9062 26.0605C13.0469 26.2012 13.2376 26.2802 13.4365 26.2803H26.5488C26.7477 26.2802 26.9385 26.2012 27.0791 26.0605C27.2197 25.9199 27.2988 25.7291 27.2988 25.5303V17.2867C27.6453 17.1147 27.9525 16.8729 28.201 16.5765C28.4496 16.2802 28.6342 15.9356 28.7432 15.5644C28.7646 15.4935 28.7754 15.4198 28.7754 15.3457V14.081C28.7752 13.9491 28.7405 13.8195 28.6748 13.705L26.667 10.2373ZM27.2754 14.2822V15.2226C27.1793 15.4744 27.0093 15.6913 26.7878 15.8448C26.5662 15.9983 26.3035 16.0814 26.034 16.083C25.7645 16.0846 25.5008 16.0048 25.2774 15.854C25.054 15.7032 24.8814 15.4884 24.7822 15.2378V14.4668C24.7821 14.3974 24.7726 14.3285 24.7539 14.2617L23.9319 11.3633H25.5849L27.2754 14.2822ZM14.1865 20.2363V17.5622C14.8591 17.5234 15.4949 17.2425 15.9765 16.7715C16.2408 17.0326 16.5543 17.2388 16.8987 17.3781C17.2432 17.5174 17.6119 17.587 17.9834 17.583H17.9844C18.7046 17.5887 19.3996 17.3178 19.926 16.8263C19.9492 16.8285 19.9693 16.8398 19.9931 16.8398C20.0169 16.8398 20.037 16.8284 20.0602 16.8263C20.4482 17.1908 20.9333 17.4356 21.457 17.5312V20.2363H14.1865ZM19.2432 11.3633V15.1911C19.1537 15.4479 18.9877 15.671 18.7675 15.8304C18.5473 15.9898 18.2835 16.0779 18.0117 16.0828C17.7399 16.0877 17.4731 16.0091 17.2473 15.8577C17.0215 15.7062 16.8476 15.4892 16.749 15.2359V14.5713L17.6589 11.3633L19.2432 11.3633ZM22.3723 11.3633L23.2822 14.5713V15.1444C23.1983 15.4125 23.0322 15.6474 22.8073 15.8158C22.5825 15.9842 22.3104 16.0776 22.0295 16.0828C21.7487 16.0879 21.4733 16.0046 21.2424 15.8446C21.0116 15.6845 20.8369 15.4559 20.7432 15.1911V11.3633H22.3723ZM22.957 17.4144C23.3518 17.2826 23.7115 17.0628 24.0088 16.7715C24.4904 17.2425 25.1262 17.5234 25.7988 17.5622V20.2363H22.957V17.4144ZM12.71 14.2822L14.4004 11.3633H16.0993L15.2773 14.2617C15.2587 14.3285 15.2492 14.3975 15.249 14.4668V15.1464C15.1671 15.4211 14.9975 15.6613 14.7661 15.8305C14.5347 15.9996 14.2543 16.0883 13.9678 16.083C13.6945 16.0888 13.4264 16.009 13.2008 15.8547C12.9752 15.7004 12.8036 15.4794 12.71 15.2226V14.2822ZM14.1866 24.7802V21.7363H25.7988V24.7803L14.1866 24.7802Z" fill="white" />
              </g>
              <defs>
                <filter id="filter0_d_1069_2967" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.176471 0 0 0 0 0.254902 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1069_2967" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1069_2967" result="shape" />
                </filter>
                <clipPath id="clip0_1069_2967">
                  <rect width="18" height="18" fill="white" transform="translate(11 9)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='p-[8px] pl-0font-bold '>Joy and Supply Store</div>
        </div>

        {/* Main Menu */}
        <div className='pt-2.5'>
          {menuItems.map(({ ...menu }) => {
            const classes = getSideItemClasses(menu);
            return (
              <Link href={menu.link} key={menu.id}>
                <div className={classes} >
                  <div className='pr-2.5 pt-[9px] pl-2 pb-2'>
                    <Image
                      src={menu.icon}
                      alt={menu.label}
                      className="relative stroke-primary-dark-blue hover:stroke-primary-hover-blue"
                      width={18}
                      height={18}
                    />
                  </div>
                  <div className='p-[8px] pl-0'>{menu.label}</div>
                </div>
              </ Link>
            )
          })}

        </div>
      </div>
      {/* Secondary Menu */}
      <div >
        {menuFooterItems.map(({ ...menu }) => {
          const classes = getSideItemClasses(menu);
          return (
            <div className={classes} key={menu.id}>
              <div className='pr-2.5 pt-[9px] pl-2 pb-2'>
                <Image
                  src={menu.icon}
                  alt={menu.label}
                  className="relative hover:fill-primary-hover-blue"
                  width={18}
                  height={18}
                />
              </div>
              <div className='p-[8px] pl-0 flex items-center'>{menu.label}</div>
            </div>
          )
        })}

      </div>
    </div >
  )
}

export default Sidebar