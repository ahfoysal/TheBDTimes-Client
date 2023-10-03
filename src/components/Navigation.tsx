import { tv } from 'tailwind-variants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Spinner } from '@nextui-org/spinner';
import { Tooltip } from '@nextui-org/tooltip';
import { Button } from '@nextui-org/button';

import { useHover } from '@react-aria/interactions';
import { usepewdsflixSettings } from '@/hooks/useLocalStorage';
import { NavLink } from 'react-router-dom';
import Menu from '@/assets/icons/MenuIcon';
import Home from '@/assets/icons/HomeIcon';
import Search from '@/assets/icons/SearchIcon';
import Discover from '@/assets/icons/DiscoverIcon';
import TrendingUp from '@/assets/icons/TrendingUpIcon';

export function NavigationBrowse() {
  // const dispatch = useAppDispatch();
  // const [searchTerm, setSearchTerm] = React.useState('');
  // const [skip, setSkip] = React.useState(true);
  // const { data, isLoading, error, isSuccess, isError } = useSearchQuery(
  //   searchTerm,
  //   {
  //     skip,
  //   }
  // );
  // if (isSuccess) {
  //   dispatch(setSearchResult(data.data));
  // }

  const { sidebarMiniMode, sidebarHoverMode, sidebarBoxedMode } =
    usepewdsflixSettings();
  const { hoverProps: sidebarHoverProps, isHovered } = useHover({
    isDisabled: !sidebarHoverMode.value,
  });
  const navigationItemWidthStyle =
    sidebarMiniMode.value && !isHovered ? 'w-[56px]' : 'w-[215px]';

  return (
    <aside
      {...sidebarHoverProps}
      className={sidebarStyles({
        sidebarMiniMode: sidebarMiniMode.value,
        sidebarBoxedMode: sidebarBoxedMode.value,
        sidebarHoverMode: isHovered,
      })}
    >
      <div className="mb-3 ml-4 flex h-[65px] w-full flex-row items-center justify-start">
        <Button
          className={`${
            sidebarMiniMode.value && !isHovered
              ? 'basis-[50px]'
              : 'basis-[60px]'
          } flex shrink-0 grow-0 justify-center`}
          isIconOnly
          variant="light"
          onPress={() => {
            sidebarMiniMode.set(!sidebarMiniMode.value);
          }}
        >
          <Menu />
        </Button>
        {sidebarMiniMode.value && !isHovered ? null : (
          <div className="flex items-center gap-x-3">
            <NavLink
              to="/"
              arial-label="home-page"
              className="bg-gradient-to-tr from-secondary to-primary to-50% bg-clip-text text-lg font-medium tracking-normal text-white focus:outline-none focus:ring-2 focus:ring-focus md:text-2xl"
            >
              Menu
            </NavLink>
          </div>
        )}
      </div>
      <NavigationMenu
        orientation="vertical"
        // viewportPositionClassName
        viewportPositionClassName={viewportPositionStyles({
          sidebarMiniMode: sidebarMiniMode.value,
          sidebarHoverMode: sidebarHoverMode.value,
          sidebarBoxedMode: sidebarBoxedMode.value,
        })}
      >
        <NavigationMenuList className="m-0 gap-3 [&_.active]:bg-default [&_.active]:text-default-foreground">
          <NavigationMenuItem
            className={`${navigationItemWidthStyle} text-left transition-[width] duration-200`}
            value="home"
          >
            <Tooltip
              isDisabled={
                !sidebarMiniMode.value || (sidebarHoverMode && isHovered)
              }
              placement="right"
              offset={10}
              showArrow
            >
              <NavigationMenuLink asChild>
                <NavLink
                  to="/"
                  className={navigationMenuTriggerStyle({
                    class: `${navigationItemWidthStyle} h-[56px] justify-start transition-[width] duration-200`,
                  })}
                >
                  {({ isActive, isPending }) => (
                    <>
                      <Home
                        className={
                          !sidebarMiniMode.value ||
                          (sidebarHoverMode && isHovered)
                            ? 'mr-4'
                            : ''
                        }
                        filled={isActive}
                      />
                      {!sidebarMiniMode.value || (sidebarHoverMode && isHovered)
                        ? 'Home'
                        : null}
                      <Spinner
                        size="sm"
                        classNames={{
                          base:
                            isPending &&
                            (!sidebarMiniMode.value ||
                              (sidebarHoverMode && isHovered))
                              ? 'ml-auto'
                              : '!hidden',
                          circle1: 'border-b-default-foreground',
                          circle2: 'border-b-default-foreground',
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem
            className={`${navigationItemWidthStyle} text-left transition-[width] duration-200`}
            value="trending"
          >
            <Tooltip
              content={'trending'}
              isDisabled={
                !sidebarMiniMode.value || (sidebarHoverMode && isHovered)
              }
              placement="right"
              showArrow
              offset={10}
            >
              <NavigationMenuLink asChild>
                <NavLink
                  to="/trending/"
                  className={navigationMenuTriggerStyle({
                    class: `${navigationItemWidthStyle} h-[56px] justify-start transition-[width] duration-200`,
                  })}
                >
                  {({ isActive, isPending }) => (
                    <>
                      <TrendingUp
                        className={
                          !sidebarMiniMode.value ||
                          (sidebarHoverMode && isHovered)
                            ? 'mr-4'
                            : ''
                        }
                        filled={isActive}
                      />
                      {!sidebarMiniMode.value || (sidebarHoverMode && isHovered)
                        ? 'Trending'
                        : null}
                      <Spinner
                        size="sm"
                        classNames={{
                          base:
                            isPending &&
                            (!sidebarMiniMode.value ||
                              (sidebarHoverMode && isHovered))
                              ? 'ml-auto'
                              : '!hidden',
                          circle1: 'border-b-default-foreground',
                          circle2: 'border-b-default-foreground',
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </Tooltip>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`${navigationItemWidthStyle} text-left transition-[width] duration-200`}
            value="Sports"
          >
            <Tooltip
              content={'Sports'}
              isDisabled={
                !sidebarMiniMode.value || (sidebarHoverMode && isHovered)
              }
              placement="right"
              showArrow
              offset={10}
            >
              <NavigationMenuLink asChild>
                <NavLink
                  to="/sports"
                  className={navigationMenuTriggerStyle({
                    class: `${navigationItemWidthStyle} h-[56px] justify-start transition-[width] duration-200`,
                  })}
                >
                  {({ isActive, isPending }) => (
                    <>
                      <Discover
                        className={
                          !sidebarMiniMode.value ||
                          (sidebarHoverMode && isHovered)
                            ? 'mr-4'
                            : ''
                        }
                        filled={isActive}
                      />
                      {!sidebarMiniMode.value || (sidebarHoverMode && isHovered)
                        ? 'Sports'
                        : null}
                      <Spinner
                        size="sm"
                        classNames={{
                          base:
                            isPending &&
                            (!sidebarMiniMode.value ||
                              (sidebarHoverMode && isHovered))
                              ? 'ml-auto'
                              : '!hidden',
                          circle1: 'border-b-default-foreground',
                          circle2: 'border-b-default-foreground',
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </Tooltip>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`${navigationItemWidthStyle} text-left transition-[width] duration-200`}
            value="discover"
          >
            <Tooltip
              content={'Search'}
              isDisabled={
                !sidebarMiniMode.value || (sidebarHoverMode && isHovered)
              }
              placement="right"
              showArrow
              offset={10}
            >
              <NavigationMenuLink asChild>
                <NavLink
                  to="/search"
                  className={navigationMenuTriggerStyle({
                    class: `${navigationItemWidthStyle} h-[56px] justify-start transition-[width] duration-200`,
                  })}
                >
                  {({ isActive, isPending }) => (
                    <>
                      <Search
                        className={
                          !sidebarMiniMode.value ||
                          (sidebarHoverMode && isHovered)
                            ? 'mr-4'
                            : ''
                        }
                        filled={isActive}
                      />
                      {!sidebarMiniMode.value || (sidebarHoverMode && isHovered)
                        ? 'Search'
                        : null}
                      <Spinner
                        size="sm"
                        classNames={{
                          base:
                            isPending &&
                            (!sidebarMiniMode.value ||
                              (sidebarHoverMode && isHovered))
                              ? 'ml-auto'
                              : '!hidden',
                          circle1: 'border-b-default-foreground',
                          circle2: 'border-b-default-foreground',
                        }}
                      />
                    </>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </Tooltip>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}

const sidebarStyles = tv({
  base: 'fixed z-[1999] box-border hidden shrink-0 grow-0 transition-[max-width] duration-400 sm:block',
  variants: {
    sidebarMiniMode: {
      true: 'w-full max-w-[80px] basis-[80px]',
      false: 'w-full max-w-[250px] basis-[250px]',
    },
    sidebarBoxedMode: {
      true: 'left-[15px] top-[15px] h-[calc(100vh_-_30px)] rounded-large border border-divider backdrop-blur-lg shadow-medium',
      false: 'left-0 top-0 h-screen',
    },
    sidebarHoverMode: {
      true: 'w-full max-w-[250px] basis-[250px] rounded-r-large border border-divider backdrop-blur-lg shadow-2xl',
    },
  },
  compoundVariants: [{}],
  defaultVariants: {
    sidebarMiniMode: false,
    sidebarBoxedMode: false,
  },
});

const sidebarActiveStyles = tv({
  base: 'h-[56px] justify-start transition-[width] duration-400',
  variants: {
    sidebarMiniMode: {
      true: 'w-[56px]',
      false: 'w-[215px]',
    },
    sidebarHoverMode: {
      true: 'w-[215px]',
    },
    sidebarRoundedAll: {
      true: 'rounded-small',
      false: 'rounded-r-small',
    },
    sidebarPillAll: {
      true: 'rounded-[56px]',
      false: 'rounded-r-[56px]',
    },
  },
  defaultVariants: {
    sidebarMiniMode: false,
    sidebarRoundedAll: true,
  },
});

const viewportPositionStyles = tv({
  base: '!fixed',
  variants: {
    sidebarMiniMode: {
      true: '!left-[85px]',
    },
    sidebarHoverMode: {
      true: '!left-[250px]',
    },
    sidebarBoxedMode: {
      true: '!left-[265px]',
    },
  },
  compoundVariants: [
    {
      sidebarMiniMode: true,
      sidebarHoverMode: true,
      sidebarBoxedMode: false,
      class: '!left-[250px]',
    },
    {
      sidebarMiniMode: true,
      sidebarHoverMode: false,
      sidebarBoxedMode: true,
      class: '!left-[100px]',
    },
    {
      sidebarMiniMode: false,
      sidebarHoverMode: false,
      sidebarBoxedMode: false,
      class: '!left-[250px]',
    },
  ],
  defaultVariants: {
    sidebarMiniMode: false,
    sidebarHoverMode: false,
    sidebarBoxedMode: false,
  },
});

const navigationPartStyles = tv({
  base: 'w-full overflow-x-visible overflow-y-scroll scrollbar-hide',
  variants: {
    sidebarBoxedMode: {
      true: 'h-[calc(100%_-_100px)]',
      false: 'h-[calc(100%_-_80px)]',
    },
  },
  defaultVariants: {
    sidebarBoxedMode: false,
  },
});
